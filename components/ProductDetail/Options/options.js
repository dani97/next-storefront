import React from 'react';
import style from './options.module.css';
import Option from "./option";

const Options = ({ optionGroups }) => {
    return (
        <div>
            {
                optionGroups.map((options) => {
                    return (
                        <div key={options.label}>
                            <span> {options.label} </span>
                            <div className={style.optionList}>
                            {
                                options.values.map(
                                    (option) => <Option key={option.label} option={option} name={options.id}/>)
                            }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Options;