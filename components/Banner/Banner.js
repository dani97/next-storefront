import React from "react";
import styles from "./Banner.module.css";
import Link from "next/link";

const Banner = ({ imageUrl, bannerText, ctlText, ctlLink }) => (
  <>
    <div className={styles.bannerHeader}>
      <h1>{bannerText}</h1>
    </div>
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.container}>
        <Link href="/category/[uid]" as={ctlLink}>
          <a className={styles.ctlText}> {ctlText}</a>
        </Link>
      </div>
    </div>
  </>
);

export default Banner;
