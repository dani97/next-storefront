import React from 'react';
import Link from "next/link";
import { ChevronRight} from "react-feather";

const Branch = ({category, className, handleCategoryChange}) => {

    return (
        <div className={className}>
            <Link href="/category/[uid]" as={"/category/" + category.url_key}>
                <a>{category.name}</a>
            </Link>
            <ChevronRight onClick={() =>handleCategoryChange(category.id)}/>
        </div>
    )
}

export default Branch;