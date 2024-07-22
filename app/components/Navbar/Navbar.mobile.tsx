import Image from "next/image";

import styles from "./Navbar.mobile.module.css";

// ***
// can't be refactored because this whole component relies on rippleui's drawer component
// using tailwind's properties
// ***
export default function MobileNavbar() {
  return (
    <nav className="navbar navbar-no-boxShadow bg-transparent">
      <div className="navbar-end">
        {/* for defining the side the drawer opens up from */}
        <input
          type="checkbox"
          id="drawer-right"
          className="drawer-toggle navbar-item"
          aria-hidden="true"
        />

        {/* for defining what handles the opening of the drawer */}
        <label htmlFor="drawer-right" className="btn btn-ghost h-14">
          <Image
            src={"/Hamburger_Menu.svg"}
            width={5} // Arbitrary values - required
            height={5} // Arbitrary values - required
            alt="navbar menu icon - closed"
            className="w-8"
          />
        </label>

        {/* overlay for blacking out everything but the drawer */}
        <label htmlFor="drawer-right" className="overlay"></label>

        {/* everything beyond this point is for the drawer and it's content */}
        <div className="drawer drawer-right h-auto min-w-48 max-w-56 text-nowrap text-ellipsis">
          {/* this is for handling the layout of the contents in the drawer */}
          <div className="flex flex-col justify-end items-end h-full text-right">
            {/* for defining what closes the drawer*/}
            <label
              htmlFor="drawer-right"
              className="btn btn-sm btn-circle btn-ghost mr-6 mt-6"
            >
              <Image
                src={"/Hamburger_Menu_Close.svg"}
                width={5} // Arbitrary values - required
                height={5} // Arbitrary values - required
                alt="navbar menu icon - closed"
                className="w-6"
              />
            </label>

            {/* menu items inside the drawer */}
            <div className="w-screen font-light">
              <hr className={`${styles.borderDecoration} my-4`} />
              <h2 className="text-xl uppercase mr-8">about</h2>
              <h2 className="text-xl uppercase mr-8 mt-4">schedule</h2>
              <hr className={`${styles.borderDecoration} my-4`} />
              <h2 className="text-xl uppercase mr-8">challenges</h2>
              <h2 className="text-xl uppercase mr-8 mt-4">prizes</h2>
              <h2 className="text-xl uppercase mr-8 mt-4">faq</h2>
              <hr className={`${styles.borderDecoration} mb-14 my-4`} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
