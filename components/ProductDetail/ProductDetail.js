import React from 'react';
import style from './productDetail.module.css';
import ImageSlider from "../ImageSlider";
import QtyBox from "../QtyBox";
const ProductDetail = ({ product }) => {
    return (
        <section className={style.productGrid}>
            <ImageSlider photos={product.media_gallery}/>
            <div className={style.productDetail}>
                <div className={style.name}>{ product.name }</div>
                <div className={style.sku}> SKU: { product.sku }</div>
                <div className={style.cartForm}>
                    <QtyBox defaultValue={1} stepper={1}/>
                    <button className={style.addToCart}>Add To Cart</button>
                </div>
                <div className={style.productDescription} dangerouslySetInnerHTML={{__html: product.description.html}}/>
            </div>
        </section>);
};

export default ProductDetail;