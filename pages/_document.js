import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#72B340" />
          <link rel="apple-touch-icon" href="/icon-192.png" />
          <link
            rel="preload"
            href="/fonts/Baloo_Paaji_2.woff2"
            as= "font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
