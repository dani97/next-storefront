import React from "react";
import style from "./drawer.module.css";
import cls from "classnames";
import dynamic from "next/dynamic";
import ErrorBoundary from "../Error/ErrorBoundry";

const CategoryTree = dynamic(() => import("./CategoryTree"), {ssr: false});

const Drawer = ({open, title}) => {
    return (
        <>
            <nav className={cls(style.drawer, {[style.open]: open})}>
                <h3 className={style.title}>{title}</h3>
                <ErrorBoundary>
                    <CategoryTree rootId={2}/>
                </ErrorBoundary>
            </nav>
        </>
    );
};

export default Drawer;
