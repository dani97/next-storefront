import React, {Profiler} from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

const callback = (data) => {
  console.log(data);
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#72B340" />
          <link rel="apple-touch-icon" href="/icon-192.png" />
          <link
            rel="preload"
            href="/fonts/Baloo_Paaji_2.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/shadows_into_light.woff2"
            as="font"
            crossOrigin=""
          />
        </Head>
        <Profiler id="document" onRender={callback}>
        <body>
          <Main />
          <NextScript />
        </body>
      </Profiler>
      </Html>
    );
  }
}

export default MyDocument;
