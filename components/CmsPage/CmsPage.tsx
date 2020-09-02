import React from "react";
import styles from "./CmsPage.module.css";

interface Props {
    title: string,
    contents: string
}

const CmsPage: React.FC<Props> = ({ title, contents }) => {
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
