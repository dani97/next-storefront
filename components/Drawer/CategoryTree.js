import React, {Fragment, useState} from 'react';
import { withApollo } from '../../apollo/apollo';
import { useQuery } from "@apollo/react-hooks";
import GET_CATEGORY_LIST from '../../queries/getCategoryList.graphql';
import Branch from "./Branch";
import Leaf from "./Leaf";
import styles from './categoryTree.module.css';
import {ChevronLeft , Home} from "react-feather";
import TreeSkeleton from "./TreeSkeleton";

const Tree = ({rootId}) => {
    const [category, setCategory] = useState(rootId);
    const [prevCategory, setPrevCategory] = useState(rootId);
    const {error, loading, data } = useQuery(GET_CATEGORY_LIST, {
        variables: {
            "ids": [category]
        }
    });

    const handleCategoryChange = (categoryId) => {
        setPrevCategory(category);
        setCategory(categoryId);
    }


    if (loading) return <TreeSkeleton/>;

    const categories =data.categoryList[0].children;
    const getChildren = (category) => {
        if (category.children_count > 0) {
            return <Branch
                key={category.id}
                category={category}
                className={styles.branch}
                handleCategoryChange={handleCategoryChange}
            />
        }
        return <Leaf key={category.id} category={category} className={styles.leaf}/>
    }

    return <section className={styles.categoryTree}>
        <div role="button-group" className={styles.controls}>
            <Home onClick={() => handleCategoryChange(rootId)}/>
            <ChevronLeft onClick={() => handleCategoryChange(prevCategory)}/>
        </div>
        {
            categories.map((category) => {
                return (
                    <Fragment key={category.id}>
                        {
                            getChildren(category)
                        }
                    </Fragment>
                )
            })
        }
    </section>
}

export default withApollo({ssr: false})(Tree);