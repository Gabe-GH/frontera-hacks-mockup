import Link from "next/link";

export default function HeroSection() {
  return (
    <hgroup className="hero-section">
      <time
        className="hero-section-item"
        id="hackathon-date"
        dateTime="2024-10-19"
      >
        October 19-20, 2024
      </time>
      <h1 className="hero-section-item" id="frontera-hacks-title">
        Frontera Hacks
      </h1>
      <p className="hero-section-item" id="frontera-hacks-hook">
        Accelerate innovation in the RGV
      </p>
      <p className="hero-section-item" id="frontera-hacks-description">
        Collaborate with peers to learn new skills, unleash your creativity and
        build solutions for real-world problems at the 2nd hackathon hosted by{" "}
        <span>
          <Link
            id="frontera-devs-website-link"
            className="hero-section-item"
            href={`https://fronteradevs.com`}
          >
            Frontera Devs
          </Link>
        </span>
      </p>
      <Link id="register-btn" className="hero-section-item" href={"/login"}>
        Register
      </Link>
    </hgroup>
  );
}
