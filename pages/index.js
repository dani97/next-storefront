import React from "react";
import Head from "next/head";
import { getHomePage } from 'prismic/api';
import Banner from "components/Banner";

const index = ({preview, contents}) => {
  return (
    <>
      <Head>
        <title>Next Storefront</title>
      </Head>
      <article>
        {
          contents.body.map((content, index) => {
            if (content.type === "banner_with_caption") {
              return <Banner
                key = {index}
                imageUrl={content.primary.image_banner.url}
                bannerText={content.primary.title_of_banner[0].text}
                ctlText={content.primary.button_label[0].text}
                ctlLink="category/venia-accessories"
              />
            }
          })
        }
      </article>
    </>
  );
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const contents = await getHomePage();

  return {
    props: {
      preview,
      contents
    },
  }
}

export default index;
