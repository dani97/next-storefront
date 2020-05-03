import React, {useState} from 'react';
import styles from './Image.module.css';

const Image = ({src, alt}) => {
    return (
        <>
            <img
                src={src+"?auto=webp&format=pjpg&width=840&height=375&fit=cover"}
                alt={alt}
                loading="lazy"
                className={styles.loadedImage}
            />
        </>
    )
}

export default Image;