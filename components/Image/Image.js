import React from "react";
import styles from "./Image.module.css";

const transparentPlaceholder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII=";

const Image = ({ src, alt }) => {
  return (
    <div className={styles.container}>
      <img
        src={transparentPlaceholder}
        alt={alt || ""}
        loading="eager"
        className={styles.placeholder}
        width={840}
        height={375}
      />
      <img
        src={src + "?auto=webp&format=pjpg&width=840&height=375&fit=cover"}
        alt={alt}
        loading="lazy"
        className={styles.image}
        width={840}
        height={375}
      />
    </div>
  );
};

export default Image;
