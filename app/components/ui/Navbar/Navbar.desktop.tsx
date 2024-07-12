import Link from "next/link";

export default function DesktopNavbar() {
  return (
    <div className="navbar navbar-no-boxShadow bg-transparent pt-8 mb-9">
      <div className="bg-amber-400 w-1/5 shrink-2 ml-8"></div>
      {/* Nav Links */}
      <div className="navbar-start uppercase font-extralight text-base mr-20 justify-around lg:gap-20 md:mr-10 md:gap-10">
        <Link href="/#about" className="navbar-item">
          about
        </Link>
        <Link href="/#schedule" className="navbar-item">
          schedule
        </Link>
        <Link href="/#challenges" className="navbar-item">
          challenges
        </Link>
        <Link href="/#prizes" className="navbar-item">
          prizes
        </Link>
        <Link href="/#faq" className="navbar-item">
          faq
        </Link>
      </div>
      
      {/* Login */}
      <div className="navbar-end mr-28">
        <button type="button" className="btn btn-outline btn-md p-4">
          <Link href={`/login`} className="uppercase font-extralight text-base text-nowrap">
            log in
          </Link>
        </button>
      </div>
    </div>
  );
}
