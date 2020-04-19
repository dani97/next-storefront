import React from 'react';

const Option = ({ option, name }) => {
    return (
        <>
          <input id={option.value_index} type="radio" name={name}/>
            <label htmlFor={option.value_index}>{option.default_label}</label>
        </>
    );
}

export default Option;