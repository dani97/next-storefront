import React from 'react';
import style from './ProductCard.module.css';

const ProductCard = ({product}) => {
    return (
        <div className={style.productCard}>
            <img src={product.thumbnail.url}  alt={product.thumbnail.label}/>
            <div> { product.name } </div>
        </div>
    );
}

export default ProductCard;