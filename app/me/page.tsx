import { GetUser } from "../helpers/isLoggedIn";

export default async function Me() {
  // Call the GetUser function and wait for its result
  const currentUser = await GetUser();

  // Log the current user to the console
  console.log(currentUser);
  console.log("HERE");

  return (
    <div>
      <h1>User Information</h1>
      {/* Display user information */}
      {currentUser ? (
        <div>
          <p>{`Welcome, ${currentUser.name}`}</p>
        </div>
      ) : (
        <p>No user is logged in.</p>
      )}
    </div>
  );
}
