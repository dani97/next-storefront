import React from "react";
import style from "./Price.module.css";

const PriceBox = ({ product }) => {
  const minimumPrice = parseFloat(
      product.price_range.minimum_price.final_price.value
    ).toFixed(2),
    maximumPrice = parseFloat(
      product.price_range.maximum_price.final_price.value
    ).toFixed(2);

  const priceVal =
    minimumPrice === maximumPrice
      ? minimumPrice
      : minimumPrice + " - " + maximumPrice;
  return <div className={style.priceBox}>${priceVal}</div>;
};

export default PriceBox;
