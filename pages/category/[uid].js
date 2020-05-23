import React, { Fragment } from "react";
import { withApollo } from "apollo/apollo";
import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import GET_CATEGORY from "queries/getCategory.graphql";
import ErrorPage from "next/error";
import ProductGrid from "components/ProductGrid";
import Pagination from "components/Pagination";
import GridSkeleton from "components/ProductGrid/GridSkeleton";

const Category = () => {
  const router = useRouter();
  const { error, loading, data } = useQuery(GET_CATEGORY, {
    variables: {
      urlKey: router.query.uid,
      onServer: true,
      currentPage: router.query.page ?? 1,
      pageSize: 6,
    },
    fetchPolicy: "cache-first",
  });
  if (error) {
    return <ErrorPage statusCode={404} />;
  }
  if (loading) return <GridSkeleton />;
  const category = data.categoryList[0];
  if (!category) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Fragment>
      <Head>
        <title>{category.name}</title>
        <meta name="description" content={category.meta_description} />
      </Head>
      <ProductGrid products={category.products.items} />
      <Pagination pageInfo={category.products.page_info} />
    </Fragment>
  );
};

export default withApollo({ ssr: true })(Category);
