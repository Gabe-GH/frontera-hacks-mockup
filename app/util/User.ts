"use server";

import { Claims, Session } from "@auth0/nextjs-auth0";

import GetProfileServer from "../helpers/isLoggedIn";

export const userInfo = async () => {
  const session = await GetProfileServer();

  return session?.user;
};

export const isUserLoggedIn = async () => {
  const session = await GetProfileServer();

  return session?.user !== undefined ? true : false;
};
