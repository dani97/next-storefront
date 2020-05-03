import React, {useState} from 'react';

const Image = ({src, alt}) => {
    const [state, setState] = useState(false);
    const transparentPlaceholder=
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII=';

    const handleImageLoad = () => {
        setState(true);
    }

    return (
        <>
            {state || <img loading="eager" alt={alt} src={transparentPlaceholder}/>}
            <img
                src={src+"?auto=webp&format=pjpg&width=840&height=375&fit=cover"}
                alt={alt}
                loading="lazy"
                onLoad={handleImageLoad}
            />
        </>
    )
}

export default Image;