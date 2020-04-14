import React from "react";
import style from './hamburger.module.css';

const Hamburger = props => (
    <button className={style.hamburger} onClick={props.click}>
        <div className={style.hamburgerLine}/>
        <div className={style.hamburgerLine}/>
        <div className={style.hamburgerLine}/>
    </button>
);

export default Hamburger;