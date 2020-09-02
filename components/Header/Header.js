import React from "react";
import Link from "next/link";
import style from "./header.module.css";
import { Hamburger } from "components/Drawer";
import { Search, ShoppingCart, User } from "react-feather";

const Header = (props) => (
  <header className={style.header}>
    <nav className={style.headerNav}>
      <div>
        <Hamburger click={props.drawerOpenHandler} />
      </div>
      <div className={style.headerLogo}>
        <Link href="/">
          <a>Next Storefront</a>
        </Link>
      </div>
      <div className={style.spacer} />
      <div className={style.headerNavItems}>
        <ul>
          <li>
            <a>
              <Search onClick={props.searchBoxHandler} />
            </a>
          </li>
          <li>
            <Link href="#">
              <a>
                <User />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <ShoppingCart />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
