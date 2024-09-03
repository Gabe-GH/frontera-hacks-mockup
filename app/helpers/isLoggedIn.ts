"use server";

import { Claims, getSession, Session } from "@auth0/nextjs-auth0";

export default async function GetProfileServer() {
  const session: Session | null | undefined = await getSession();

  return session;
}

export async function GetUser() {
  const session: Session | null | undefined = await GetProfileServer();

  if (!session) return { user: null };

  console.log(session);

  const user: Claims = session.user;

  return user;
}
