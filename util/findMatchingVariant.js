/**
 * Find Matching Product variant
 *
 * @param variants
 * @param selectedOptions
 * @returns {*|number|bigint}
 */
export const findMatchingVariant = ({ variants, selectedOptions }) => {
  return variants.find(({ attributes }) => {
    const customAttributes = (attributes || []).reduce(
      (map, { code, value_index }) => new Map(map).set(code, value_index),
      new Map()
    );

    let isSelected = true;
    customAttributes.forEach((value, key) => {
      if (selectedOptions.get(key) !== value) {
        isSelected = false;
      }
    });

    return isSelected;
  });
};
