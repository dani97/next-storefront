import React from "react";
import styles from "./TextBanner.module.css";
import Link from "next/link";

const TextBanner = ({ bannerText, ctlText, ctlLink }) => (
  <>
    <div className={styles.banner}>
      <div className={styles.linkContainer}>
        <Link href="/category/[uid]" as={ctlLink}>
          <a className={styles.ctlText}> {ctlText}</a>
        </Link>
      </div>
      <div className={styles.textContainer}>
        <p>{bannerText}</p>
      </div>
    </div>
  </>
);

export default TextBanner;
