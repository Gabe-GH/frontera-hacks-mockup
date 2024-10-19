"use server";

import { GetUser } from "../helpers/isLoggedIn";
import { findHacker } from "../db/controllers";

import { RegisterBtn } from "../components/HeroSection/Registerbtn";
import FirstTimePopUpModal from "../components/PopUp/FirstTimeModal";

export default async function Me() {
  // Call the GetUser function and wait for its result
  const currentUser = await GetUser();

  const isRegistered = await findHacker(currentUser.email);

  return (
    <>
      <FirstTimePopUpModal />
    </>
  );
}
