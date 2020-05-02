import React from 'react';
import styles from'./ProductGrid.module.css';
import ContentLoader from "react-content-loader";

const GridCard = (props) => {
    return (
        <ContentLoader
            {...props}
            style={{height: "80vh"}}
            backgroundColor="#3a3a3a"
            foregroundColor="#121212"
            speed={2}
            gradientRatio={0.5}
            uniqueKey="clp-skeleton"
        >
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
        </ContentLoader>)
}
const GridSkeleton = () => {
    return (
        <div className={styles.productGrid}>
            <GridCard/>
            <GridCard/>
            <GridCard/>
            <GridCard/>
            <GridCard/>
            <GridCard/>
        </div>
    )
}

export default GridSkeleton;