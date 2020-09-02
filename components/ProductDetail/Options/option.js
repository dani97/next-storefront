import React from "react";

const Option = ({ option, name, selectHandler }) => {
  return (
    <>
      <input
        id={option.value_index}
        type="radio"
        name={name}
        onChange={() =>
          selectHandler({ code: name, value: option.value_index })
        }
      />
      <label htmlFor={option.value_index}>{option.default_label}</label>
    </>
  );
};

export default Option;
