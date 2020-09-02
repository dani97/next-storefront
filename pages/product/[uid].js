import React from "react";
import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import GET_PRODUCT_DETAIL from "queries/getProductDetail.graphql";
import ProductDetail from "components/ProductDetail";
import ErrorPage from "next/error";
import PdpSkeleton from "components/ProductDetail/PdpSkeleton";
import SiteLayout from "components/SiteLayout";

const Product = () => {
  const router = useRouter();
  const { error, loading, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: { urlKey: router.query.uid, onServer: true },
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <PdpSkeleton />;
  if (error) return <div> Error Fetching Product</div>;
  let product, title;
  try {
    product = data.productDetail.items[0];
    title = product.meta_title;
  } catch (e) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={product.meta_description} />
      </Head>
      <ProductDetail product={product} />
    </>
  );
};

Product.getLayout = page => <SiteLayout>{page}</SiteLayout>


export default Product;
