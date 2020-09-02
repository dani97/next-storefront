import React, { useRef, useState } from "react";
import PRODUCT_SEARCH from "queries/productSearch.graphql";
import { useLazyQuery } from "@apollo/react-hooks";
import styles from "./SearchBar.module.css";
import cls from "classnames";
import { Debounce } from "react-throttle";
import { withApollo } from "apollo/apollo";
import Link from "next/link";
import Image from "components/Image";

/**
 * Search results Component
 *
 * @param show
 * @param called
 * @param loading
 * @param data
 * @param clearResults
 * @param onClick
 * @returns {*}
 * @constructor
 */
const SearchResults = ({
  show,
  called,
  loading,
  data,
  clearResults,
  onClick,
}) => {
  if (!show || (called && !loading && !data)) return <ul />;
  else if (!called || clearResults)
    return (
      <ul className={styles.searchList} onClick={onClick}>
        <li>Search your favorites</li>
      </ul>
    );
  else if (called && loading)
    return (
      <ul className={styles.searchList} onClick={onClick}>
        <li> Loading Results ...</li>
      </ul>
    );
  else if (called && !loading && data.products.items.length === 0)
    return (
      <ul className={styles.searchList} onClick={onClick}>
        <li> Product Not Found</li>
      </ul>
    );
  else if (called && !loading && data)
    return (
      <ul className={styles.searchList} onClick={onClick}>
        {data.products.items.map((product) => (
          <Link href="/product/[uid]" as={"/product/" + product.url_key}>
            <a>
              <li className={styles.searchResult}>
                <div className={styles.image}>
                  <Image src={product.small_image.url} />
                </div>
                <p>{product.name}</p>
                <p>{"$" + product.price.regularPrice.amount.value}</p>
              </li>
            </a>
          </Link>
        ))}
      </ul>
    );
  return (
    <ul className={styles.searchList} onClick={onClick}>
      <li>Loading Results ...</li>
    </ul>
  );
};

/**
 * Search Box Component
 * @param open
 * @returns {*}
 * @constructor
 */
const SearchBox = ({ open }) => {
  const searchBox = useRef(null);
  const [resultsVisibility, setResultsVisibility] = useState(false);
  const [clearResults, setClearResults] = useState(false);

  const [executeQuery, { called, loading, data }] = useLazyQuery(
    PRODUCT_SEARCH,
    {
      fetchPolicy: "cache-first",
    }
  );

  const searchProducts = () => {
    const searchTerm = searchBox.current.value;
    if (searchTerm.length > 2) {
      executeQuery({ variables: { inputText: searchTerm } });
      setClearResults(false);
    }
    if (searchTerm.length === 0) {
      setClearResults(true);
    }
  };

  return (
    <div
      className={cls(styles.searchBar, { [styles.open]: open })}
      onFocusCapture={() => {
        setResultsVisibility(true);
      }}
      onMouseEnter={() => {
        setResultsVisibility(true);
      }}
      onMouseLeave={() => {
        setResultsVisibility(false);
      }}
    >
      <Debounce time="500" handler="onChange">
        <input
          type="text"
          placeholder="Search Products"
          onChange={searchProducts}
          ref={searchBox}
        />
      </Debounce>
      <SearchResults
        data={data}
        called={called}
        loading={loading}
        clearResults={clearResults}
        show={searchBox.current && resultsVisibility}
        onClick={() => setResultsVisibility(false)}
      />
    </div>
  );
};

export default withApollo({ ssr: false })(SearchBox);
