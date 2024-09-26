import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
const dm_sans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Frontera Hacks",
    default: "Frontera Hacks",
  },
  description:
    "Join Frontera Hacks, a 24-hour hackathon empowering developers of all skill levels to collaborate, innovate, and accelerate tech in the Rio Grande Valley.",
  keywords: [
    "hackathon",
    "Frontera Hacks",
    "Rio Grande Valley",
    "university hackathon",
    "developer event",
    "coding competition",
    "Frontera Devs",
  ],
  openGraph: {
    title: "Frontera Hacks",
    description:
      "Join Frontera Hacks, a 24-hour hackathon empowering developers of all skill levels to collaborate, innovate, and accelerate tech in the Rio Grande Valley.",
    url: "https://fronterahacks.org",
    type: "website",
    images: [
      {
        url: "https://i.imgur.com/aSCItLE.png",
        width: 1200,
        height: 630,
        alt: "Frontera Hacks banner",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico", // Your favicon path
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
      </head>
      <body className={`${dm_sans.className} min-h-screen max-h-fit`}>
        <UserProvider>
          <Navbar />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
