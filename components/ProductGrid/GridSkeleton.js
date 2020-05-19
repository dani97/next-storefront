import React from "react";
import styles from "./ProductGrid.module.css";
import ContentLoader from "react-content-loader";

const GridCard = (props) => {
  function getCardSkeletonStyle() {
    const innerWidth = typeof window !== "undefined" ? window.innerWidth : 600;
    let height = "40vh";
    if (innerWidth > 900) {
      height = "80vh";
    }
    return {
      width: "100%",
      height,
    };
  }

  return (
    <ContentLoader
      {...props}
      style={getCardSkeletonStyle()}
      backgroundColor="#3a3a3a"
      foregroundColor="#a3a3a3"
      speed={2}
      uniqueKey={"clp-skeleton-" + props.uniqueKey}
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>
  );
};
const GridSkeleton = () => {
  return (
    <div className={styles.productGrid}>
      <GridCard uniqueKey={1} />
      <GridCard uniqueKey={2} />
      <GridCard uniqueKey={3} />
      <GridCard uniqueKey={4} />
      <GridCard uniqueKey={5} />
      <GridCard uniqueKey={6} />
    </div>
  );
};

export default GridSkeleton;
