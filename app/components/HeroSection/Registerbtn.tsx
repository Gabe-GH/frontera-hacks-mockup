"use client";

import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0/client";

import styles from "./HeroSection.module.css";

export const RegisterBtn = () => {
  const { user } = useUser();

  const redirectLink = user ? "/register" : "/api/auth/signup";

  return (
    <Link
      className={`${styles.customBtnRadius} btn p-4 md:px-6 md:py-8`}
      href={redirectLink}
    >
      <p className={`${styles.btnText} uppercase`}>Register</p>
    </Link>
  );
};
