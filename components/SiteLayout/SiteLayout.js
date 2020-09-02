import React, { useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import style from "./SiteLayout.module.css";
import BackDrop from "components/Backdrop";
import Drawer, { DrawerContext } from "components/Drawer";
import dynamic from "next/dynamic";

const SearchBar = dynamic(() => import("components/SearchBar"), { ssr: false });

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const SiteLayout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  let backDrop;
  const toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleSearchBoxOpen = () => {
    setSearchBarOpen(!searchBarOpen);
  };

  const closeOnBackdrop = () => {
    setDrawerOpen(false);
  };

  if (drawerOpen) {
    backDrop = <BackDrop click={closeOnBackdrop} />;
  }

  return (
    <div>
      <DrawerContext.Provider value={{ drawerOpen, setDrawerOpen }}>
        <Header
          drawerOpenHandler={toggleDrawerOpen}
          searchBoxHandler={toggleSearchBoxOpen}
        />
        <SearchBar open={searchBarOpen} />
        <div className={style.content}>
          <Drawer open={drawerOpen} title="Menu" />
          {backDrop}
          <section>{children}</section>
        </div>
        <div>
          <Footer />
        </div>
      </DrawerContext.Provider>
    </div>
  );
};

export default SiteLayout;
