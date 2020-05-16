import React, { useContext } from "react";
import Link from "next/link";
import DrawerContext from "./DrawerContext";

const Leaf = ({ category, className, closeDrawer }) => {
  const { setDrawerOpen } = useContext(DrawerContext);
  const handleDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <Link href="/category/[uid]" as={"/category/" + category.url_key}>
      <a onClick={handleDrawer}>
        <div className={className}>{category.name}</div>
      </a>
    </Link>
  );
};

export default Leaf;
