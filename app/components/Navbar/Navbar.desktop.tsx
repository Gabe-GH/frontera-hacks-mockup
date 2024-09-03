"use client";

import Link from "next/link";

import styles from "./Navbar.desktop.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function DesktopNavbar(props: any) {
  const { user } = useUser();

  console.log(user);

  return (
    <div
      className={`${styles.desktopNavBar} navbar navbar-no-boxShadow bg-transparent pt-8 mb-9`}
    >
      {/* Nav Links */}
      <div
        className={`${styles.linksGroupStyle} navbar-start uppercase font-extralight text-base`}
      >
        <Link href="/#about" className={`${styles.linkStyle} navbar-item`}>
          about
        </Link>
        <Link href="/#schedule" className={`${styles.linkStyle} navbar-item`}>
          schedule
        </Link>
        <Link href="/#challenges" className={`${styles.linkStyle} navbar-item`}>
          challenges
        </Link>
        <Link href="/#prizes" className={`${styles.linkStyle} navbar-item`}>
          prizes
        </Link>
        <Link href="/#faq" className={`${styles.linkStyle} navbar-item`}>
          faq
        </Link>
      </div>

      {/* USER NOT LOGGED IN */}
      {!user && (
        <>
          {/* Login */}
          <div className="navbar-end">
            <Link href={`/api/auth/login?prompt=login`}>
              <button
                type="button"
                className="btn btn-outline btn-md p-4 uppercase font-extralight text-base text-nowrap"
              >
                log in
              </button>
            </Link>
          </div>
        </>
      )}

      {/* USER LOGGED IN */}
      {user && (
        <>
          {/* Login */}
          <div className="navbar-end">
            <button type="button" className="btn btn-outline btn-md p-4">
              <Link
                href={`/api/auth/logout`}
                className="uppercase font-extralight text-base text-nowrap"
              >
                log out
              </Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
