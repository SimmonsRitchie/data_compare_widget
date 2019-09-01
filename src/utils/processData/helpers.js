/* HELPER FUNCS
These functions are designed to assist with other, larger data processing tasks
*/

export const getUniqueVals = (arr = [], field = "") => {
  /* Takes an array of objs, returns an array of all unique values based on desired key
  Params:
  arr - the array you want to process
  field - the key you want to get unique values for
  */
  const arrayOfVals = arr.map(item => item[field]);
  return [...new Set(arrayOfVals)];
};

export const filterArray = (data, field, matchVal) => {
  /* Takes an array of objects, filters out items that don't match based on provided field and matching value.
  Returns an empty array if no data provided */
  if (!data || !matchVal) {
    return [];
  } else {
    return data.filter(
      item => item[field].toLowerCase() === matchVal.toLowerCase()
    );
  }
};

