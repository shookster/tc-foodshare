import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button type="button" className="btn btn-primary btn-md" onClick={() => loginWithRedirect()}>Donate</button>;
};
export default LoginButton;