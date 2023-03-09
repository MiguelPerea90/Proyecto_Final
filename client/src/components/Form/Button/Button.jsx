import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} onClick={props.onClick} className={style.button}>
      {props.value}
    </button>
  );
};

export default Button;
