import Link from "next/link";
import { Bruno_Ace } from "next/font/google";

import styles from "./HeroSection.module.css";

const frontera_logo_font = Bruno_Ace({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HeroSection() {
  return (
    <hgroup className={`${styles.heroContainer} ml-10 mt-20`}>
      <Headers />
      <HookText />
      <RegisterBtn />
    </hgroup>
  );
}

const Headers = () => {
  return (
    <>
      <time
        dateTime="2024-10-19"
        className={`${styles.dateText} text-date-grey font-bold`}
      >
        October 19-20, 2024
      </time>
      <h1
        className={`${styles.fronteraHacksLogo} ${frontera_logo_font.className} my-4 md:my-10`}
      >
        frontera hacks
      </h1>
      <h2 className={`${styles.hookText} font-semibold mb-10`}>
        Accelerate innovation in the RGV
      </h2>
    </>
  );
};

const HookText = () => {
  return (
    <p className={`${styles.descriptionText} font-light mr-12 mb-3`}>
      Collaborate with peers to learn new skills, unleash your creativity and
      build solutions for real-world problems at the 2nd hackathon hosted by{" "}
      <span>
        <Link
          className={`${styles.fronteraLink} link link-underline hover:link-primary`}
          href={`https://fronteradevs.com`}
        >
          Frontera Devs
        </Link>
      </span>
    </p>
  );
};

const RegisterBtn = () => {
  return (
    <Link
      className={`${styles.customBtnRadius} my-6 btn btn-ghost btn-md p-4 md:px-6 md:py-8`}
      href={"/login"}
    >
      <p className={`${styles.btnText} uppercase`}>Register</p>
    </Link>
  );
};
