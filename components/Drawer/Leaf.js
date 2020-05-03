import React from 'react';
import Link from "next/link";

const Leaf = ({category, className}) => {
    return (
        <div className={className}>
            <Link href="/category/[uid]" as={"/category/" + category.url_key}>
                <a>{category.name}</a>
            </Link>
        </div>
    )
}

export default Leaf;