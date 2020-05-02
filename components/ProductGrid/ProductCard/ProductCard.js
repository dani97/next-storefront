import React from 'react';
import style from './ProductCard.module.css';
import Link from "next/link";
import PriceBox from "../../PriceBox";
import Image from "../../Image/Image";

const ProductCard = ({product}) => {
    return (
        <Link href="/product/[uid]" as={"/product/" + product.url_key }>
            <div className={style.productCard}>
                <Image src={product.thumbnail.url}  alt={product.thumbnail.label}/>
                <div className={style.cardTextArea}>
                    <div><span>{ product.name } </span></div>
                    <PriceBox product={product}/>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;