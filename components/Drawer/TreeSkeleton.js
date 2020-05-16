import React from "react";
import ContentLoader from "react-content-loader";
import { ChevronLeft, Home } from "react-feather";
import styles from "./categoryTree.module.css";

const TreeSkeleton = () => {
  return (
    <section className={styles.categoryTree}>
      <div role="button-group" className={styles.controls}>
        <Home />
        <ChevronLeft />
      </div>
      <ContentLoader
        uniqueKey="drawer"
        backgroundColor="#3a3a3a"
        foregroundColor="#a3a3a3"
      >
        <rect x="0" y="0" width="100%" height="20" />
        <rect x="0" y="30" width="100%" height="20" />
        <rect x="0" y="60" width="100%" height="20" />
        <rect x="0" y="90" width="100%" height="20" />
        <rect x="0" y="120" width="100%" height="20" />
      </ContentLoader>
    </section>
  );
};

export default TreeSkeleton;
