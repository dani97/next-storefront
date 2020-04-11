import React,{Fragment} from 'react';
import Head from "next/head";
import { useRouter } from "next/router";
import GET_CMS from '../../queries/getCmsPage.graphql';
import getUrlKey from "../../util/makeUrlKey";
import createApolloClient from "../../apollo/apolloClient";

const cms = ({page})=> {

    return (
        <Fragment>
            <Head>
                <title>{page.title}</title>
                <meta name="description" content={page.meta_description}/>
            </Head>
            <h1>{page.content_heading}</h1>
            <div dangerouslySetInnerHTML={{__html: page.content}}>
            </div>
        </Fragment>
    );
};

export async function getStaticProps({ params: {uid}}) {
    const client = createApolloClient();
     const { data } = await client.query({
        query: GET_CMS,
        variables: {
            uid: getUrlKey(uid),
            onServer: true
        }
    });
   return {
       props: {
           page: data.cmsPage
       }
   }
}

export async function getStaticPaths() {
    const pages = [
        'enable-cookies',
        'privacy-policy-cookie-restriction-mode',
        'service-unavailable',
        'private-sales',
        'reward-points'
    ];
    const paths = pages.map( page => ({
        params: {
            uid: page + '.html'
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export default cms;
