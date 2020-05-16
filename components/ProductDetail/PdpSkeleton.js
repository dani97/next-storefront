import React from "react";
import styles from "./productDetail.module.css";
import ContentLoader from "react-content-loader";

const BoxSkeleton = (props) => {
  return (
    <ContentLoader
      {...props}
      backgroundColor="#3a3a3a"
      foregroundColor="#a3a3a3"
      speed={2}
      style={{ height: "100%", width: "70%" }}
      uniqueKey={"pdp-skeleton-" + props.uniqueKey}
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>
  );
};
const PdpSkeleton = () => {
  return (
    <div className={styles.productGrid}>
      <BoxSkeleton uniqueKey={1} />
      <BoxSkeleton uniqueKey={2} />
    </div>
  );
};

export default PdpSkeleton;
