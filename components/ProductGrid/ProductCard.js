import React from 'react';
import style from './ProductCard.module.css';
import Link from "next/link";

const ProductCard = ({product}) => {
    return (
        <Link href="/product/[uid]" as={"/product/" + product.url_key }>
            <div className={style.productCard}>
                <img src={product.thumbnail.url}  alt={product.thumbnail.label}/>
                <div className={style.cardTextArea}>
                    <div><span>{ product.name } </span></div>
                    <div>
                        <span> {product.price_range.minimum_price.regular_price.value}
                        {product.price_range.minimum_price.regular_price.currency}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;