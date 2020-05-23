import React from "react";
import styles from "./CmsPage.module.css";

const CmsPage = ({ title, contents }) => {
  return (
    <section className={styles.cmsPage}>
      {title && <h1 className={styles.title}> {title} </h1>}
      <article
        className={styles.contents}
        dangerouslySetInnerHTML={{ __html: contents }}
      />
    </section>
  );
};

export default CmsPage;
