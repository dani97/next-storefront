import React, { useContext } from "react";
import Link from "next/link";
import { ChevronRight } from "react-feather";
import DrawerContext from "./DrawerContext";

const Branch = ({ category, className, handleCategoryChange }) => {
  const { setDrawerOpen } = useContext(DrawerContext);
  const handleDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={className}>
      <Link href="/category/[uid]" as={"/category/" + category.url_key}>
        <a onClick={handleDrawer}>{category.name}</a>
      </Link>
      <ChevronRight onClick={() => handleCategoryChange(category.id)} />
    </div>
  );
};

export default Branch;
