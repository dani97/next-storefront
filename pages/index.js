import React, {Fragment} from 'react';
import Link from "next/link";
import Head from "next/head";
import createApolloClient from '../apollo/apolloClient';
import gql from "graphql-tag";

const query = gql`query  {
    categoryList {
        include_in_menu
        meta_title
        meta_keywords
        meta_description
        product_count
        url_key
        image
        children {
            name
            include_in_menu
            meta_title
            meta_keywords
            meta_description
            product_count
            url_key
        }
    }
}`;

const index = ({categories}) => {
    return <Fragment>
        <Head>
            <title>Next Storefront</title>
        </Head>
        <nav>
            {
                categories.map((category, index) => {
                    return (<div key={index}>
                        <Link href="/category/[uid]" as={"/category/" + category.url_key + '.html'}>
                            <a>{category.name}</a>
                        </Link>
                    </div>)
                })
            }
        </nav>
        <footer>
            <div>
                <Link href="/cms/[uid]" as={"cms/private-sales.html"}>
                    <a>Private Sales</a>
                </Link>
            </div>
            <div>
                <Link href="/cms/[uid]" as={"cms/reward-points.html"}>
                    <a>Reward points</a>
                </Link>
            </div>
            <div>
                <Link href="/cms/[uid]" as={"cms/privacy-policy-cookie-restriction-mode.html"}>
                    <a>Private Policy</a>
                </Link>
            </div>
        </footer>
    </Fragment>
}

export async function getStaticProps() {
    const client = createApolloClient();
    const { data } = await client.query({query});
    return {
        props: {
            categories: data.categoryList[0].children
        }
    }
}

export default index;