import React from "react";
import Head from "next/head";
import { getHomePage } from "prismic/api";
import Banner from "components/Banner";
import { Carousel } from "react-responsive-carousel";
import TextBanner from "components/TextBanner";
import styles from "pageStyles/index.module.css";

const index = ({ preview, contents }) => {
  return (
    <>
      <Head>
        <title>{contents.title[0].text}</title>
        <meta
          name="description"
          content="Magento 2 PWA reference built with Next JS framework"
        />
      </Head>
      <>
        {preview && (
          <div role="alert">
            <div> This is a preview page</div>
            <a href="/api/exit-preview"> Click here </a> to exit preview mode.
          </div>
        )}
        <section>
          {contents.body.map((content, index) => {
            if (content.type === "banner_with_caption") {
              return (
                <Banner
                  key={index}
                  imageUrl={content.primary.image_banner.url}
                  bannerText={content.primary.title_of_banner[0].text}
                  ctlText={content.primary.button_label[0].text}
                  ctlLink="category/venia-accessories"
                />
              );
            }
          })}
        </section>
        <section>
          <TextBanner
            bannerText={contents.welcome_text[0].text}
            ctlText="Checkout Winter Collection"
            ctlLink="/category/venia-sweaters"
          />
        </section>
        <section className={styles.carousalSection}>
          {contents.body.map((content, index) => {
            if (content.type === "image_gallery") {
              return (
                <Carousel
                  infiniteLoop
                  key={index}
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  dynamicHeight={false}
                  centerMode={true}
                >
                  {content.fields.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image.gallery_image.url}
                        alt={image.image_captions[0].text}
                        loading="lazy"
                      />
                      <p className="legend">{image.image_captions[0].text}</p>
                    </div>
                  ))}
                </Carousel>
              );
            }
          })}
        </section>
      </>
    </>
  );
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const contents = await getHomePage(previewData);

  return {
    props: {
      preview,
      contents,
    },
  };
}

export default index;
