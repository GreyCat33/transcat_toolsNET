import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;

// This will probably be discontinued, used it at first to test the application to cause a redirect to authenticate with auth0.
// For now will keep in the case we will go this route. 
// Its quite simple to follow that we call a function from the Auth0 hook to init login. 