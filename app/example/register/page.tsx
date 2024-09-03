// app/page.tsx
"use client";

import { useState } from "react";
import { createExampleUser } from "../handlers";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await createExampleUser(name, email);
      alert("User created successfully!");
    } catch (e) {
      setError("Failed to create user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create User"}
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
