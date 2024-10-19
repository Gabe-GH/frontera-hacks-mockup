"use client";

import Scanner from "../components/QRCodeScanner/Scanner";
import { useRouter } from "next/navigation"; // Correct import for the App Router
import { useState } from "react";

const AdminPage = (props: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleScanSuccess = async (decodedText: string) => {
    try {
      setLoading(true); // Set loading to true when scan is successful
      const hacker = "66d75826270b2463fbe6d3c8";

      // You can adjust the loading state to stop after the profile is fetched if needed
      router.push(`/admin/hacker/${hacker}`);

      //   console.log("Navigating to:", decodedText);
      //   router.push("https://www.wikipedia.com"); // Navigate based on the scanned QR code
    } catch (err) {
      console.log(err);
      setLoading(false); // Ensure to stop loading if an error occurs
    }
  };

  return (
    <>
      <h2>Admin Page</h2>
      {loading ? (
        <div>Loading...</div> // Show loading state while navigation is in progress
      ) : (
        <Scanner onScanSuccess={handleScanSuccess} />
      )}
    </>
  );
};

export default AdminPage;
