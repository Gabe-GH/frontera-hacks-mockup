import DesktopNavbar from "./Navbar.desktop";
import MobileNavbar from "./Navbar.mobile"

export default function Navbar() {
  return (
    <>
      <div className="hidden md:flex w-screen">
        <DesktopNavbar />
      </div>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}
