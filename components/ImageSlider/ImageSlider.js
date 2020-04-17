import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import style from './ImageSlider.module.css';

const ImageSlider = ({ photos }) => {
    return (
        <div className={style.slider}>
            <Carousel showStatus={false} showArrows={false}>
                {
                    photos.map((photo, index) => {
                        return <img key={index} alt={photo.label} src={photo.url}/>
                    })
                }
            </Carousel>
        </div>
    )
};

export default ImageSlider;