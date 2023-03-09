import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cities from "../../components/Cities/Cities";
import { LoginButton } from "../../components/Login-Logout/Login/LoginButton";
import { LogoutButton } from "../../components/Login-Logout/Logout/LogoutButton";
import { Profile } from "../../components/Login-Logout/Profile/Profile";
import { getCities } from "../../redux/actions";
import style from "./Home.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../../components/NavBar/NavBar";
import Landing from "../Landing/Landing";

const Home = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();

  console.log("prueba de ejecucion de componente Home");

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  return (
    <div className={style.homeContainer}>
      <NavBar />
      <div className={style.homeContainerWelcome}>
        <div className={style.homeWelcome}>
          {isAuthenticated ? (
            <div>
              <h1>¡Bienvenido!</h1>
              {/* <Profile /> */}
              <br />
              <p>Encuentra el lugar perfecto para pasar tus vacaciones!</p>
              {/* <div>
                <LogoutButton />
              </div> */}
            </div>
          ) : (
            <div>
              <h1>¡Bienvenido!</h1>
              <br />
              <p>Encuentra el lugar perfecto para pasar tus vacaciones!</p>
              {/* <LoginButton /> */}
            </div>
          )}
          <br />
        </div>
      </div>
      <div className={style.homeCardContainer}>
        <Cities />
      </div>
    </div>
  );
};

export default Home;
