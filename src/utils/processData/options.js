/* OPTIONS:
These funcs handle the creation of our options in our inputs
*/

import {getUniqueVals, filterArray} from './helpers'

export const createParentOptions = (data, parentOptionsKey) => {
  /* Creates the options for our parent select input */
  const uniqueVals = getUniqueVals(data, parentOptionsKey);
  return createOptions(uniqueVals);
}


export const createChildOptions = ({ data, filterKey, filterVal, groupBy }) => {
  /* Takes an array of objects, filters them by a specified field and 
  returns an array of objects for use by react-select in form {label: item, value: item}
  Returns an empty array if no data provided */
  if (!data || !filterVal) {
    return [];
  } else {
    const filteredVals = filterArray(data, filterKey, filterVal);
    const uniqueVals = getUniqueVals(filteredVals, groupBy);
    return createOptions(uniqueVals);
  }
};

export const createOptions = arr => {
  /* Takes an array of strings, returns an array of objects in format:
  {label: item, value: item} */

  return arr.map(item => ({ label: item, value: item }));
};