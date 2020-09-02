import React, { useContext } from "react";
import Link from "next/link";
import { ChevronRight } from "react-feather";
import DrawerContext from "./DrawerContext";

interface BranchProps {
    category: any,
    className: string,
    handleCategoryChange : (string) => void
}

const Branch: React.FC<BranchProps> = ({ category, className, handleCategoryChange }) => {
  const { setDrawerOpen } = useContext(DrawerContext);
  const handleDrawer: () => void = () => {
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
