import React from "react";
import { Menu} from "react-feather";
import style from './hamburger.module.css';

const Hamburger = props => (
    <div className={style.hamburger} onClick={props.click}>
        <Menu />
    </div>
);

export default Hamburger;