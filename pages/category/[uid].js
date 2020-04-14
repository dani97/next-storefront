import React,{Fragment} from 'react';
import { withApollo } from '../../apollo/apollo';
import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import GET_CATEGORY from '../../queries/getCategory.graphql';
import LoadingIndicator from "../../components/LoadingIndicator";
import ErrorPage from "next/error";
import ProductGrid from "../../components/ProductGrid";

const Category = ()=> {
    const router = useRouter();
    const {error, loading, data } = useQuery(GET_CATEGORY, {
        variables: {
            urlKey: router.query.uid,
            onServer: true,
            currentPage: router.query.page ?? 1,
            pageSize: 6
        }
    });
    if (error) { console.log(error); return <ErrorPage statusCode={404}/>}
    if (loading) return <LoadingIndicator/>;
    const category = data.categoryList[0];
    return (
        <Fragment>
            <Head>
                <title>{category.name}</title>
                <meta name="description" content={category.meta_description}/>
            </Head>
            <ProductGrid products={category.products.items}/>
        </Fragment>
    );
};

export default withApollo({ ssr: true})(Category);
