import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./LoginButton.module.css";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={style.loginButton}>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
};
