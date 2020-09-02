import React from "react";
import { useRouter } from "next/router";
import style from "./pagination.module.css";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "react-feather";
import queryString from "querystring";
import url from "url";

const Pagination = ({ pageInfo }) => {
  const router = useRouter();

  if (pageInfo.total_pages === 1) {
    return "";
  }
  const { current_page, total_pages } = pageInfo;

  const generateQueryParams = (query, page) => {
    const queryCopy = { ...query };
    delete queryCopy.uid;
    return queryString.stringify({ ...queryCopy, page });
  };

  const stripQueryParams = (asPath) => {
    return url.parse(asPath).pathname;
  };

  const navigate = async (page) => {
    const queryString = "?" + generateQueryParams(router.query, page);
    await router.push(
      router.pathname + queryString,
      stripQueryParams(router.asPath) + queryString
    );
  };

  return (
    <div className={style.pagination}>
      <button disabled={current_page === 1} onClick={() => navigate(1)}>
        <ChevronsLeft />
      </button>

      <button
        disabled={current_page === 1}
        onClick={() => navigate(current_page - 1)}
      >
        <ChevronLeft />
      </button>

      <div>
        {current_page} of {total_pages}
      </div>

      <button
        disabled={current_page === total_pages}
        onClick={() => navigate(current_page + 1)}
      >
        <ChevronRight />
      </button>

      <button
        disabled={current_page === total_pages}
        onClick={() => navigate(total_pages)}
      >
        <ChevronsRight />
      </button>
    </div>
  );
};

export default Pagination;
