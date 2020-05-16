import "../styles.css";
import React from "react";
import SiteLayout from "components/SiteLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
}
