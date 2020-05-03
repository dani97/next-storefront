import React from 'react';
import styles from'./ProductGrid.module.css';
import ContentLoader from "react-content-loader";

const GridCard = (props) => {
    function getCardSkeletonStyle() {
        const innerWidth  = typeof window !== "undefined" ? window.innerWidth : 600;
        let height = "60vh";
        if (innerWidth > 768) {
            height = "80vh";
        }
        return {
            width : "100%",
            height
        };
    }

    return (
        <ContentLoader
            {...props}
            style={getCardSkeletonStyle()}
            backgroundColor="#3a3a3a"
            foregroundColor="#a3a3a3"
            speed={2}
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