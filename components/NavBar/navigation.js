import React from 'react';
import createApolloClient from "../../apollo/apolloClient";
import Link from "next/link";
import { withApollo } from '../../apollo/apollo';
import { useQuery } from "@apollo/react-hooks";
import GET_CATEGORY_LIST from '../../queries/getCategoryList.graphql';
import LoadingIndicator from "../LoadingIndicator";

const Navigation = () => {
    const {error, loading, data } = useQuery(GET_CATEGORY_LIST);
    if (loading) return <LoadingIndicator/>
    const categories =data.categoryList[0].children;
    return <nav>
        {
            categories.map((category, index) => {
                return (<div key={index}>
                    <Link href="/category/[uid]" as={"/category/" + category.url_key}>
                        <a>{category.name}</a>
                    </Link>
                </div>)
            })
        }
    </nav>
}

export default withApollo({ssr: true})(Navigation);