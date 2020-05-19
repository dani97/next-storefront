import React, { useContext, useEffect, useReducer } from "react";
import style from "./options.module.css";
import Option from "./option";
import VariantProductContext from "../VariantProductContext";
import { findMatchingVariant } from "util/findMatchingVariant";

const optionsReducer = (state, action) => {
  let newState = new Map(state.entries());
  newState.set(action.code, action.value);
  return newState;
};

const Options = ({ optionGroups, variants, className }) => {
  const [selectedOptions, optionsDispatch] = useReducer(
    optionsReducer,
    new Map()
  );
  const { setSelectedVariant } = useContext(VariantProductContext);
  useEffect(() => {
    if (optionGroups.length === selectedOptions.size) {
      const selectedVariant = findMatchingVariant({
        variants,
        selectedOptions,
      });
      setSelectedVariant(selectedVariant);
    }
  }, [variants, selectedOptions]);

  return (
    <div className={className}>
      {optionGroups.map((options) => {
        const attributeCode = options.attribute_code;
        return (
          <div key={options.label}>
            <span> {options.label} </span>
            <div className={style.optionList}>
              {options.values.map((option) => (
                <Option
                  key={option.label}
                  option={option}
                  name={attributeCode}
                  selectHandler={optionsDispatch}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Options;
