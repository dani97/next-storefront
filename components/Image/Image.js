import React from "react";

const Image = ({src, alt}) => {
    return (
        <>
            <img
                src={src + "?auto=webp&format=pjpg&width=840&height=375&fit=cover"}
                alt={alt}
                loading="lazy"
            />
        </>
    );
};

export default Image;
