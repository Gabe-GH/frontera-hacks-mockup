import DesktopNavbar from "./Navbar.desktop";
import MobileNavbar from "./Navbar.mobile";

export default function Navbar() {
  return (
    <>
      <nav className="hidden md:flex w-screen">
        <DesktopNavbar />
      </nav>
      <nav className="md:hidden w-screen">
        <MobileNavbar />
      </nav>
    </>
  );
}
