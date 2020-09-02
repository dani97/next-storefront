import React from "react";
import style from "./backDrop.module.css";

interface  BackDropProps {
    click: (event: React.MouseEvent<HTMLDivElement>) => void
}

/**
 * @param props
 * @constructor
 */
const BackDrop: React.FC<BackDropProps> = ({click}) => (
  <div className={style.backDrop} onClick={click} />
);

export default BackDrop;
