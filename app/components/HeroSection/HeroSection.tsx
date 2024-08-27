import Link from "next/link";
import { Bruno_Ace, Hanken_Grotesk } from "next/font/google";

import DiscordBtn from "../ui/DiscordBtn";

import styles from "./HeroSection.module.css";
import Image from 'next/image';
import { schedule } from "./schedule"; 

const frontera_logo_font = Bruno_Ace({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const sponsor_button_font= Hanken_Grotesk({
  weight: "400"
})


export default function HeroSection() {
  return (
    <hgroup className={`${styles.heroContainer} ml-10 mt-20`}>
      <Headers />
      <HookText />
      <div
        className={`flex mt-6 w-40 justify-between md:justify-between md:w-64`}
      >
        <RegisterBtn />
        <DiscordBtn />
      </div>
      <div>
      <AboutSection />
      </div>
      <div>
      <PillarsSection />
      </div>
      <div>
      <ScheduleSection/>
      </div>
      <div>
        <SponsorsSection/>
      </div>
      <div>
        <TeamSection/>
      </div>
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

const RegisterBtn = () => {
  return (
    <Link
      className={`${styles.customBtnRadius} btn p-4 md:px-6 md:py-8`}
      href={"/login"}
    >
      <p className={`${styles.btnText} uppercase`}>Register</p>
    </Link>
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
      Frontera Hacks is a 24-hour hackathon that aims to foster a community of developers driven to innovate. At Frontera Hacks, we aim to provide an experience for developers of all skill levels to adopt skills taught outside of the classroom, collaborate with like-minded teams, and design projects with the potential to accelerate innovation in the Rio Grande Valley.
    </p>
    </div>
    </>
  );
};

const PillarsSection = () => {
  return(
  <>
  <div className={`${styles.pillarsSection} mt-12 md:mt-20`}></div>
  <h1 className={` ${frontera_logo_font.className} mr-10 my-4 md:my-10 text-5xl`}
  >
    Pillars
  </h1>

  <div className={'mt-24 flex w-full justify-center gap-x-12'}>

    <div className={`flex flex-col items-center`}>
    <Image
            src="/connect-pillar-image.png"
            alt="Connect"
            width={150} 
            height={150}
            className={styles.pillarImage}
          />
   <div className={`${frontera_logo_font.className} mt-1 text-3xl`}>Connect</div>
    <div className={`mt-5 font-light lg:w-4/5`}>Meet developers interested in shaping 
      the future of innovation at Frontera Hacks</div>
    </div>

    <div className={`flex flex-col items-center`}>
    <Image
            src="/grow-pillar-image.png"
            alt="Grow"
            width={150} 
            height={150} 
            className={styles.pillarImage}
          />
   <div className={`${frontera_logo_font.className} mt-1 text-3xl`}>Grow</div>
   <div className={`mt-5 font-light lg:w-4/5`}>Advance your technical and interpersonal skills through our hands-on workshops</div>
    </div>

    <div className={`flex flex-col items-center`}>
    <Image
            src="/build-pillar-image.png"
            alt="Build"
            width={150} 
            height={150} 
            className={styles.pillarImage}
          />
   <div className={`${frontera_logo_font.className} mt-1 text-3xl`}>Build</div>
   <div className={`mt-5 font-light lg:w-4/5`}>Develop solutions with the potential to aid and impact our community</div>
    </div>
  </div>
  </>
  );
};

const ScheduleSection = () => {

  return(
    
    <div className={`mt-36 md:mt-20 w-full`}>
     <h1 className={`${frontera_logo_font.className} mr-10 my-4 md:my-10 text-5xl`}
  >
    Schedule
  </h1>

<div className= {` mt-12 w-full flex gap-x-16`}>

{schedule.map((day,idx)=>(<div key={idx} className= {`w-3/4`}> 
  <span className={`text-xl`}>Day {day.dayNumber} - {day.date}</span>
 {
  day.events.map((evnt,idx)=> ( <div key={idx} className= {`flex w-full whitespace-nowrap mt-3 justify-between`}>

 <div className="w-40">
  {evnt.time}
 </div>

 <div className= {`flex w-full flex-col items-start justify-start`}>
  {evnt.eventName}
 </div>
    </div>))
 }

</div>))}


</div>
</div>

  );

};

const SponsorsSection= () => {
  return(
    <div className= {`mt-36`}>
      <h1 
    className={`${frontera_logo_font.className} mr-10 my-4 md:my-10 text-5xl`}
    > 
    Sponsors 
    </h1>
    <p className={`font-light text-sm justify-self-center text-center`}
    >
      Frontera Hacks is made possible by our wonderful sponsors.
    </p>
    <div className={`mt-12 flex justify-center gap-x-12`}>
      <div>
        <Image
        src="/sponsors/Heb.png"
        alt=""
        width={152} 
        height={59}
        className={``}
        />
      </div>
      <div>
        <Image
         src="/sponsors/Galaxy.png"
         alt=""
         width={200} 
         height={50}
         className={``}
        />
      </div>

    </div>
    <p className={`mt-20 font-light text-sm justify-self-center text-center`}
    >
      Want to help make this event a reality?
       </p>

    <div className={`mt-4`}>

       <Link
      className={`bg-white text-black border border-white rounded-full py-1 px-4 block text-center max-w-44 mx-auto`}
      href="mailto:fronteradevs@gmail.com"
    >
      <p className={`${sponsor_button_font.className} text-xs`}>
        BECOME A SPONSOR </p>
    </Link>
    </div>
    </div>
  )

};

const TeamSection = () => {
return(
  <div>
     <h1 
    className={`${frontera_logo_font.className} mr-10 my-4 md:my-10 text-5xl`}
    > 
    Team 
    </h1>

    <p className={`font-light text-sm justify-self-center text-center`}>
    Our team is a vibrant mix of passionate students, each bringing their own unique flavor to the table. Together, we've blended our skills and creativity to brew up an unforgettable hackathon experience. We're here to support, inspire, and cheer you on every step of the way. Feel free to connect with us on LinkedIn!
    </p>

  </div>
)

};

const FaqSection = () => {

  
};


