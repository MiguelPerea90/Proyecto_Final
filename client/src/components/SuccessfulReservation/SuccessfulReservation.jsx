import React from "react";
import style from "./SuccessfulReservation.module.css"
import NavBar from "../NavBar/NavBar";
import ActivityContainer from "../Activity/ActivityContainer/ActivityContainer";

const SuccessfulReservation = ({res, hotel}) =>{
  console.log(hotel)
  return(
    <main className={style.main}>
      <NavBar />
     <ActivityContainer />
      <section className={style.card}>
        <h1>Reservación creada..!!</h1>
        <p>Estimado <span>{res.user.name}</span> al correo <span>{res.user.email}</span> fue enviada la información detallada de la reservación</p>
      </section>
    </main>
  )
}


export default SuccessfulReservation;