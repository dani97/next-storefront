import React from 'react';
import style from './productDetail.module.css';
import ImageSlider from "../ImageSlider";
import QtyBox from "./QtyBox";
import PriceBox from "../PriceBox";
import dynamic from "next/dynamic";

const ProductDetail = ({ product }) => {
    function getOptions() {
        if (product.__typename === "ConfigurableProduct") {
            const Options = dynamic(import("./Options"));
            return <Options optionGroups={product.configurable_options}/>
        }
        return '';
    }

    return (
        <section className={style.productGrid}>
            <ImageSlider photos={product.media_gallery}/>
            <div className={style.productDetail}>
                <div className={style.name}>{ product.name }</div>
                <div className={style.sku}> SKU: { product.sku }</div>
                <div className={style.priceBox}>
                    <PriceBox product={product}/>
                </div>
                {
                    getOptions()
                }
                <div className={style.cartForm}>
                    <QtyBox defaultValue={1} stepper={1}/>
                    <button className={style.addToCart}>Add To Cart</button>
                </div>
                <div className={style.productDescription} dangerouslySetInnerHTML={{__html: product.description.html}}/>
            </div>
        </section>);
};

export default ProductDetail;