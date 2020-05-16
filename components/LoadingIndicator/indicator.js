import React from "react";

import style from "./indicator.module.css";

const LoadingIndicator = (props) => {
  return (
    <div className={style.root}>
      <div className={style.spinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <span className={style.message}>{props.children}</span>
    </div>
  );
};

export default LoadingIndicator;
