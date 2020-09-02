import React from "react";
import { Carousel } from "react-responsive-carousel";
import style from "./ImageSlider.module.css";
import Image from "components/Image";

const ImageSlider = ({ photos }) => {
  function getResponsiveConfig(photoUrl) {
    const formatValue = "pjpg",
      autoValue = "webp",
      configArray = [
        [40, 50, 40],
        [80, 100, 80],
        [160, 200, 160],
        [320, 400, 320],
        [640, 800, 640],
        [1280, 1600, 1280],
        [1600, 2000, 1600],
        [2560, 3200, 2560],
      ],
      sizes =
        "(max-width: 500px) 640px, (max-width: 900px) 1600px,(max-width: 1400px) 1280px, 2560px",
      fitValue = "cover";
    let srcSet = "";
    for (const config of configArray) {
      srcSet =
        srcSet +
        photoUrl +
        "?" +
        "auto=" +
        autoValue +
        "&format=" +
        formatValue +
        "&width=" +
        String(config[0]) +
        "&height=" +
        String(config[1]) +
        "&fit=" +
        fitValue +
        " " +
        String(config[2]) +
        "w,";
    }
    return { srcSet, sizes };
  }

  const customIndicatorRenderer = (
    onClickHandler,
    isSelected,
    index,
    label
  ) => {
    if (isSelected) {
      return (
        <li
          className={style.indicatorSelected}
          aria-label={`Selected: ${label} ${index + 1}`}
          title={`Selected: ${label} ${index + 1}`}
        />
      );
    }
    return (
      <li
        className={style.indicatorDefault}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  const customThumbRenderer = (children) => {
    return children.map((item, index) => {
      const photoUrl =
        item.props.src + "?auto=webp&format=pjpg&width=80&height=100&fit=cover";
      return <img src={photoUrl} key={index} />;
    });
  };

  return (
    <div className={style.slider}>
      <Carousel
        showStatus={false}
        showArrows={false}
        infiniteLoop={true}
        swipeable={true}
        renderIndicator={customIndicatorRenderer}
        renderThumbs={customThumbRenderer}
        showThumbs={true}
      >
        {photos.map((photo, index) => {
          const photoUrl = photo.url;
          const { srcSet, sizes } = getResponsiveConfig(photoUrl);
          return (
            <Image
              key={index}
              alt={photo.label}
              src={photoUrl}
              srcSet={srcSet}
              sizes={sizes}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
