"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { findHackerById } from "@/app/db/controllers";
import { hackerFormData } from "@/app/db/controllers";

const HackerProfileAdminView = ({ params }: { params: { id: string } }) => {
  const router = useRouter(); // Initialize the router
  const [user, setUser] = useState<hackerFormData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the hacker data when the component mounts
  useEffect(() => {
    const fetchHacker = async () => {
      try {
        const hacker = await findHackerById(params.id);
        setUser(hacker);
      } catch (err) {
        setError("Hacker not found or error fetching data");
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchHacker();
  }, [params.id]); // Dependency array ensures it runs on component mount or when params.id changes

  // Handle button click to go back
  const handleGoBack = () => {
    router.back(); // Pop the router and take the user back to the previous page
  };

  // While loading, show a loading message
  if (loading) {
    return <p>Loading...</p>;
  }

  // If there was an error, show the error message
  if (error) {
    return <p>{error}</p>;
  }

  // If no user was found, display a message
  if (!user) {
    return <p>Hacker not found</p>;
  }

  // Once the user data is loaded, display the profile
  return (
    <>
      <p>{user.firstName + " " + user.lastName}</p>
      <p>{user.email}</p>
      <p>{user.phoneNumber}</p>
      <p>events</p>

      <button type="button" onClick={handleGoBack}>
        Go Back
      </button>
    </>
  );
};

export default HackerProfileAdminView;
