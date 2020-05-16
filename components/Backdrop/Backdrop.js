import React from "react";
import style from "./backDrop.module.css";

const BackDrop = (props) => (
  <div className={style.backDrop} onClick={props.click} />
);

export default BackDrop;
