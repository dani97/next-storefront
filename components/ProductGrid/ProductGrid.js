import React from "react";
import ProductCard from "./ProductCard";
import style from "./ProductGrid.module.css";

const ProductGrid = ({ products }) => {
  return (
    <div className={style.productGrid}>
      {products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
};

export default ProductGrid;
