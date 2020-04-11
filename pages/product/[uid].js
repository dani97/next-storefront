import React, {Fragment} from 'react';
import { withApollo } from '../../apollo/apollo';
import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import GET_PRODUCT_DETAIL from '../../queries/getProductDetail.graphql';
import LoadingIndicator from "../../components/LoadingIndicator";
import getUrlKey from "../../util/makeUrlKey";
import ErrorPage from "next/error";

const Product = ()=> {
    const router = useRouter();
    const {error, loading, data } = useQuery(GET_PRODUCT_DETAIL, {
        variables: { urlKey: getUrlKey(router.query.uid) , onServer: true}
    });
    if (loading) return <LoadingIndicator/>;
    if (error) return <div> Error Fetching Product</div>;
    let product, title;
    try {
        product = data.productDetail.items[0];
        title = product.meta_title
    } catch (e) {
        return <ErrorPage statusCode={404}/>
    }
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content={product.meta_description}/>
            </Head>
            <p>{JSON.stringify(data)}</p>
        </Fragment>
    );
};

export default withApollo({ ssr: true})(Product);
