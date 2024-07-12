import DesktopNavbar from "./Navbar.desktop";
import MobileNavbar from "./Navbar.mobile"

export default function Navbar() {
  return (
    <>
      <nav className="hidden md:flex w-screen">
        <DesktopNavbar />
      </nav>
      <nav className="md:hidden pt-11 w-screen">
        <MobileNavbar />
      </nav>
    </>
  );
}
