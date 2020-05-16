import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const index = () => {
  const query = useRouter().query.query;

  return (
    <>
      <Head>
        <title>Search Results for {query}</title>
      </Head>
      <p>Magento Store Built using Awesome Next JS</p>
    </>
  );
};

export default index;
