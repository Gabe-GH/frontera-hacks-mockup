"use server";

import { GetUser } from "../helpers/isLoggedIn";
import { findHacker } from "../db/controllers";

import { RegisterBtn } from "../components/HeroSection/Registerbtn";

export default async function Me() {
  // Call the GetUser function and wait for its result
  const currentUser = await GetUser();

  const isRegistered = await findHacker(currentUser.email);

  // Log the current user to the console
  console.log(currentUser);
  console.log("HERE");

  return (
    <div className="text-xl flex flex-col h-svh">
      {isRegistered && (
        <div className="m-auto h-1/5 flex flex-col justify-around content-center">
          <p className="text-center">
            Thank you for registering for FronteraHacks24 🎉
          </p>
          <p className="text-center">Come back soon for more updates. ❤️</p>
        </div>
      )}

      {!isRegistered && (
        <div className="m-auto h-1/5 flex flex-col justify-around content-center">
          <p className="text-center">You don&#39;t seem to be registered 😓</p>
          <p className="text-center">It&#39;s not too late! Register now ❤️</p>
          <div className="w-min mt-30 self-center">
            <RegisterBtn />
          </div>
        </div>
      )}
    </div>
  );
}
