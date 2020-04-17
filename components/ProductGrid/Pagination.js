import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import style from './pagination.module.css';

const Pagination = ({ pageInfo }) => {
    const router = useRouter();

    if (pageInfo.total_pages === 1) {
        return '';
    }
    const {current_page, total_pages } = pageInfo

    const prevButton = () => {
        if (current_page !== 1) {
            const query = {...router.query, page : current_page -1 }
            return (
                <Link href={{pathname: router.pathname, query: query}} as={router.asPath}>
                    <button> {'<'} </button>
                </Link>
            );
        }
        return <button disabled>{'<'}</button>;
    }

    const nextButton = () => {
        if (current_page !== total_pages) {
            const query = {...router.query, page : current_page +1 }
            return (
                <Link href={{pathname: router.pathname, query: query}} as={router.asPath}>
                    <button> {'>'} </button>
                </Link>
            );
        }
        return <button disabled>{'>'}</button>;
    }

    return (
        <div className={style.pagination}>
            {
                prevButton()
            }
            <div>{current_page}</div>
            {
                nextButton()
            }
        </div>
    );
}

export default Pagination;