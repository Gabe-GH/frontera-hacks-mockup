"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => {
      const newFormData = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      return newFormData;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setLoading(true);
    // setError(null);

    // try {
    //   // Pass formData to the controller function
    //   const response = await fetch("api/admin/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const result = await response.json();

    //   console.log(result);

    //   if (!response.ok) {
    //     setError(result.message);
    //     throw new Error(result.message);
    //   }

    //   console.log(`Form submitted successfully`);
    //   router.push("/");
    // } catch (error) {
    //   console.error("Error during form submission:", error);
    //   setError("Submission failed. Please try again.");
    // } finally {
    //   setLoading(false);
    // }

    console.log(`submitted`);
    router.push("/admin");
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold">
            Frontera Hacks Admin Dashboard
          </h1>
          <p className="text-sm">Sign in to access your account</p>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label className="form-label">Username</label>

            <input
              placeholder="Type here"
              type="text"
              name="username"
              className="input max-w-full"
            />
            <label className="form-label">
              <span className="form-label-alt"></span>
            </label>
          </div>
          <div className="form-field">
            <label className="form-label">Password</label>
            <div className="form-control">
              <input
                placeholder="Type here"
                type="password"
                name="password"
                className="input max-w-full"
              />
            </div>
          </div>
          <div className="form-field">
            <div className="form-control justify-between">
              <div className="flex gap-2"></div>
            </div>
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button type="submit" className="btn btn-primary w-full">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AdminLogin;
