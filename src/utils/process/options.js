/* OPTIONS:
These funcs handle the creation of our options in our inputs
*/

import {getUniqueVals, filterArray} from './helpers'

export const createParentOptions = (data, parentOptionsKey) => {
  /* Creates the options for our parent select input */
  const uniqueVals = getUniqueVals(data, parentOptionsKey);
  return createOptions(uniqueVals);
}


export const createChildOptions = ({ data, filterKey, filterVal, groupBy, disabledOption }) => {
  /* Takes an array of objects, filters them by a specified field and 
  returns an array of objects for use by react-select in form {label: item, value: item}
  Returns an empty array if no data provided */
  if (!data || !filterVal) {
    return [];
  } else {
    const filteredVals = filterArray(data, filterKey, filterVal);
    const uniqueVals = getUniqueVals(filteredVals, groupBy);
    let childOptions = createOptions(uniqueVals);
    if (disabledOption) {
      console.log("disabled option detected...")
      disabledOption = {...disabledOption, isDisabled: true}
      childOptions = disableOption(childOptions, disabledOption)
    } 
    return childOptions
  }
};

export const createOptions = (arr) => {
  /* Takes an array of strings, returns an array of objects in format:
  {label: item, value: item} */

  return arr.map(item => ({ label: item, value: item }));
};


const disableOption = (options, disabledOption) => {
  console.log("disabledOption",disabledOption)
  const newOptions = options.map(option => option.value === disabledOption.value ? disabledOption : option)
  console.log(newOptions)
  return newOptions
}