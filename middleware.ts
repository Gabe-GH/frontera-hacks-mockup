"use server";

import { NextResponse } from "next/server";
import {
  withMiddlewareAuthRequired,
  getSession,
} from "@auth0/nextjs-auth0/edge";

// Custom Middleware Function
export default async function middleware(req: any, ev: any) {
  const { pathname } = req.nextUrl;

  // Apply Auth0's authentication check
  const res = await withMiddlewareAuthRequired()(req, ev);

  // Completely disallow access to '/admin' if user doesn't have the right permissions
  if (pathname === "/admin" || pathname === "/example") {
    // Get the user's session data
    const session = await getSession();

    // Check if the session exists and user has the 'admin' role
    if (!session || !session.user || !session.user.roles.includes("admin")) {
      // Completely disallow access by returning a 403 Forbidden response
      return NextResponse.rewrite(new URL("/403", req.url)); // Or handle by redirecting to a "403 Forbidden" page
    }
  }

  // If all checks pass, continue with the request
  return res;
}

// Configure the matcher to apply middleware to all routes except home
export const config = {
  matcher: ["/register", "/me"], // Protect all routes except home route '/'
};
