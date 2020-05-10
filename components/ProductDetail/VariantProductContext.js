import React, {createContext} from "react";

const [selectedVariant, setSelectedVariant] = [null, () => {
}];
const VariantProductContext = createContext({
    selectedVariant,
    setSelectedVariant,
});
export default VariantProductContext;
