// app/api/auth/[auth0]/route.js
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin((req) => {
    return { returnTo: "/" };
  }),

  signup: handleLogin((req) => {
    return {
      authorizationParams: {
        screen_hint: "signup",
      },
      returnTo: "/register",
    };
  }),
});
