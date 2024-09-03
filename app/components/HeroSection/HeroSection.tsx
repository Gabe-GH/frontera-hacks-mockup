"use client";

import Link from "next/link";
import { Bruno_Ace, Hanken_Grotesk } from "next/font/google";

import DiscordBtn from "../ui/DiscordBtn";
import { RegisterBtn } from "./Registerbtn";

import styles from "./HeroSection.module.css";
import Image from "next/image";
import { schedule } from "./schedule";
import { profiles } from "./team";

import honeyStyle from "./honeycomb.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";

const frontera_logo_font = Bruno_Ace({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const sponsor_button_font = Hanken_Grotesk({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HeroSection() {
  console.log(useUser());

  return (
    <div className={`${styles.heroContainer} mx-10 mt-20 h-screen`}>
      <div className="min-h-screen -mb-50">
        <Headers />
        <HookText />
        <div
          className={`flex mt-6 w-40 justify-between md:justify-between md:w-64`}
        >
          <RegisterBtn />
          <DiscordBtn />
        </div>
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <PillarsSection />
      </div>
      <div>
        <ScheduleSection />
      </div>
      <div>
        <SponsorsSection />
      </div>
      <div>
        <FaqSection />
      </div>
      <div>
        <TeamSection />
      </div>
      <div>
        <VenueSection />
      </div>
    </div>
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
        className={`${styles.fronteraHacksLogo} ${frontera_logo_font.className} mr-10 my-4 md:my-10`}
      >
        frontera hacks
      </h1>
      <h2 className={`${styles.hookText} mr-10 font-semibold mb-10`}>
        Accelerate innovation in the RGV
      </h2>
    </>
  );
};

const HookText = () => {
  return (
    <p
      className={`${styles.descriptionText} font-light mr-16 sm:mr-44 md:mr-12 md:mb-3`}
    >
      Collaborate with peers to learn new skills, unleash your creativity and
      build solutions for real-world problems at the 2nd hackathon hosted by{" "}
      <span>
        <a
          className={`${styles.fronteraLink} link link-underline hover:text-blue-300`}
          href={`https://fronteradevs.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontera Devs
        </a>
      </span>
    </p>
  );
};

const AboutSection = () => {
  return (
    <>
      <div className={`mt-36 md:mt-20`}>
        <h1
          className={`${frontera_logo_font.className} mr-10 my-4 md:my-10 text-5xl`}
        >
          About
        </h1>
        <p
          className={`${styles.descriptionText} font-light mx-auto md:mx-0 md:mr-12 md:mb-6 w-full`}
        >
          Frontera Hacks is a 24-hour hackathon that aims to foster a community
          of developers driven to innovate. At Frontera Hacks, we aim to provide
          an experience for developers of all skill levels to adopt skills
          taught outside of the classroom, collaborate with like-minded teams,
          and design projects with the potential to accelerate innovation in the
          Rio Grande Valley.
        </p>
      </div>
    </>
  );
};

const PillarsSection = () => {
  return (
    <>
      <div className={`${styles.pillarsSection} mt-12 md:mt-20`}></div>
      <h1
        className={` ${frontera_logo_font.className} mr-10 my-4 md:my-10 text-5xl`}
      >
        Pillars
      </h1>

      <div className={"mt-24 flex w-full justify-center gap-x-12"}>
        <div className={`flex flex-col items-center`}>
          <Image
            src="/connect-pillar-image.png"
            alt="Connect"
            width={150}
            height={150}
            className={styles.pillarImage}
          />
          <div className={`${frontera_logo_font.className} mt-1 text-3xl`}>
            Connect
          </div>
          <div className={`mt-5 font-light lg:w-4/5`}>
            Meet developers interested in shaping the future of innovation at
            Frontera Hacks
          </div>
        </div>

        <div className={`flex flex-col items-center`}>
          <Image
            src="/grow-pillar-image.png"
            alt="Grow"
            width={150}
            height={150}
            className={styles.pillarImage}
          />
          <div className={`${frontera_logo_font.className} mt-1 text-3xl`}>
            Grow
          </div>
          <div className={`mt-5 font-light lg:w-4/5`}>
            Advance your technical and interpersonal skills through our hands-on
            workshops
          </div>
        </div>

        <div className={`flex flex-col items-center`}>
          <Image
            src="/build-pillar-image.png"
            alt="Build"
            width={150}
            height={150}
            className={styles.pillarImage}
          />
          <div className={`${frontera_logo_font.className} mt-1 text-3xl`}>
            Build
          </div>
          <div className={`mt-5 font-light lg:w-4/5`}>
            Develop solutions with the potential to aid and impact our community
          </div>
        </div>
      </div>
    </>
  );
};

const ScheduleSection = () => {
  return (
    <div className={`mt-36 md:mt-20 w-full`}>
      <h1
        className={`${frontera_logo_font.className} mr-10 my-4 md:my-10 text-5xl`}
      >
        Schedule
      </h1>

      <div className={` mt-12 w-full flex gap-x-16`}>
        {schedule.map((day, idx) => (
          <div key={idx} className={`w-3/4`}>
            <span className={`text-xl`}>
              Day {day.dayNumber} - {day.date}
            </span>
            {day.events.map((evnt, idx) => (
              <div
                key={idx}
                className={`flex w-full whitespace-nowrap mt-3 justify-between`}
              >
                <div className="w-40">{evnt.time}</div>

                <div
                  className={`flex w-full flex-col items-start justify-start`}
                >
                  {evnt.eventName}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const SponsorsSection = () => {
  return (
    <div className={`mt-36 mb-36`}>
      <h1
        className={`${frontera_logo_font.className} mr-10 my-4 md:my-10 text-5xl`}
      >
        Sponsors
      </h1>
      <p
        className={`font-light text-md justify-self-center text-center underline underline-offset-4`}
      >
        Frontera Hacks is made possible by our wonderful sponsors.
      </p>
      <div className={`mt-12 flex justify-center gap-x-12`}>
        <div>
          <Image
            src="/sponsors/Heb.png"
            alt=""
            width={200}
            height={200}
            className={``}
          />
        </div>
        <div className="mt-3">
          <Image
            src="/sponsors/Galaxy.png"
            alt=""
            width={200}
            height={200}
            className={``}
          />
        </div>
      </div>
      <p
        className={`mt-20 font-light text-sm justify-self-center text-center italic`}
      >
        Want to help make this event a reality?
      </p>

      <div className={`mt-4`}>
        <Link
          className={`bg-white text-black border border-white rounded-full py-1 px-4 block text-center max-w-44 mx-auto`}
          href="mailto:fronteradevs@gmail.com"
        >
          <p className={`${sponsor_button_font.className} text-xl `}>
            BECOME A SPONSOR{" "}
          </p>
        </Link>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <div className="md:hidden lg:block">
      <h1
        className={`${frontera_logo_font.className} mr-10 my-4 md:my-10 text-5xl`}
      >
        Team
      </h1>

      <p className={`font-light text-sm justify-self-center text-center`}>
        Our team is a vibrant mix of passionate students, each bringing their
        own unique flavor to the table. Together, we&#39;ve blended our skills
        and creativity to brew up an unforgettable hackathon experience.
        We&#39;re here to support, inspire, and cheer you on every step of the
        way. Feel free to connect with us on LinkedIn!
      </p>

      <div
        className={`grid ${honeyStyle.grid_temp} grid-rows-2 max-w-min mx-auto mt-20 pl-20`}
      >
        {profiles.map((profile, idx) => {
          let gridColumnClass = "";

          // Define the grid column class based on the index
          switch ((idx % 13) + 1) {
            case 1:
              gridColumnClass = "col-start-1";
              break;
            case 2:
              gridColumnClass = "col-start-3";
              break;
            case 3:
              gridColumnClass = "col-start-5";
              break;
            case 4:
              gridColumnClass = "col-start-7";
              break;
            case 5:
              gridColumnClass = "col-start-9";
              break;
            case 6:
              gridColumnClass = "col-start-11";
              break;
            case 7:
              gridColumnClass = "col-start-13";
              break;
            case 8:
              gridColumnClass = "col-start-2";
              break;
            case 9:
              gridColumnClass = "col-start-4";
              break;
            case 10:
              gridColumnClass = "col-start-6";
              break;
            case 11:
              gridColumnClass = "col-start-8";
              break;
            case 12:
              gridColumnClass = "col-start-10";
              break;
            case 13:
              gridColumnClass = "col-start-12";
              break;
            default:
              gridColumnClass = "";
              break;
          }

          return (
            <div
              key={idx}
              className={`${gridColumnClass} ${honeyStyle.items} min-w-max flex justify-center items-center`}
              id="item"
            >
              <a href={profile.url} target="_blank" rel="noopener noreferrer">
                <Image
                  width={160}
                  height={170}
                  src={profile.folderPath}
                  alt={`Profile ${idx + 1}`}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FaqSection = () => {
  const faqStyle = "font-black text-xl underline underline-offset-4 mb-1";

  return (
    <div className="sm:pb-40 md:pb-0">
      <h1
        className={`${frontera_logo_font.className} mr-10 my-4 md:my-10 text-5xl`}
      >
        Fequently Asked Questions
      </h1>

      <div className={"mt-10 grid grid-cols-2 justify-center gap-x-12"}>
        <div className={`flex flex-col`}>
          <span className={faqStyle}>What is a hackathon?</span>
          <div className={`text-sm`}>
            A hackathon is a sprint-like event where developers collaborate to
            build projects that solve challenges. At Frontera Hacks, hackers can
            look forward to educational workshops, learning from skilled
            mentors, and, of course, fun games and great swag.
          </div>
        </div>

        <div className={`flex flex-col`}>
          <span className={faqStyle}>What is the cost to participate?</span>
          <div className={`text-sm`}>
            Nada, nothing, zilch. There is absolutely no cost for applying or
            participating in Frontera Hacks. We want to make this event as
            accessible as possible to all those interested so make sure you
            apply!
          </div>
        </div>

        <div className={`mt-5 flex flex-col`}>
          <span className={faqStyle}>Who is this event for?</span>
          <div className={`text-sm`}>
            Students from all backgrounds are welcome at Frontera Hacks. No
            extensive knowledge of programming is necessary.
          </div>
        </div>

        <div className={` mt-5 flex flex-col`}>
          <span className={faqStyle}>What if I don’t know how to code?</span>
          <div className={`text-sm`}>
            No experience is needed — whether you&#39;re a coder, an artist, a
            designer, or a writer, you&#39;ll get a chance to work with various
            mentors, attend workshops, interact with companies, and learn
            alongside fellow participants.
          </div>
        </div>

        <div className={`flex flex-col`}>
          <span className={faqStyle}>Do I need a team to participate?</span>
          <div className={`text-sm`}>
            While teams are not required in order to participate, it’s a great
            way to meet new people and create something together. Teams may have
            up to 4 members, and you will have a chance to meet other hackers at
            our Team Formation events and in the Discord server!
          </div>
        </div>

        <div className={`mt-5 flex flex-col`}>
          <span className={faqStyle}>
            What if I need special accomodations?
          </span>
          <div className={`text-sm`}>
            Frontera Hacks prioritizes accessibility and accomodations that make
            our event welcoming for everyone. Please list any special
            accommodations in your admissions, or contact us with any other
            concerns.
          </div>
        </div>
      </div>
    </div>
  );
};

const VenueSection = () => {
  return (
    <div className="pb-40 md:hidden lg:block">
      <h1
        className={`${frontera_logo_font.className} mr-10 my-4 md:my-10 text-5xl`}
      >
        Venue
      </h1>

      <div className={`relative`}>
        <Image
          src="/veune_location_title.png"
          alt=""
          width={1157}
          height={158}
          className={`block`}
        />
        <h1
          className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold whitespace-nowrap 2xl:left-1/3`}
        >
          UTRGV Edinburg Engineering Building (EENGR)
        </h1>
      </div>

      <div className={``}>
        <div className={`top-[-30px] left-[-5px] relative`}>
          <Image
            src="/map-cropped.png"
            alt="Map"
            width={700}
            height={450}
            className={`absolute top-0 left-0`}
          />

          <Image
            src="/weird-shape.png"
            alt="Border"
            width={700}
            height={450}
            className={`absolute top-0 left-0 pointer-events-none`}
          />
        </div>

        <div className={`ml-96 flex flex-col justify-center`}>
          <h1
            className={`${frontera_logo_font.className}  ${styles.venueFaqText} mt-1 text-2xl ml-80`}
          >
            {" "}
            Where do I park?
          </h1>
          <p className={`mt-1 ml-80 max-w-60`}>
            Lots E16 or E21 are closest to the Engineering building. These are
            along 4th Ave.
          </p>
          <h1
            className={`${frontera_logo_font.className} ${styles.venueFaqText} mt-16 text-2xl ml-72 `}
          >
            Extra Information
          </h1>
          <p className={`mt-1 ml-64 max-w-80`}>
            Enter through the door closest to the science building. Check-in
            will be in the lobby. The building has ample space and internet
            connectivity. Here, you will work with a team to bring your ideas to
            life! Happy hacking!
          </p>
        </div>
      </div>
    </div>
  );
};
