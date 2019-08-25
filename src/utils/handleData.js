/* Functions to parse and process data */


export const getUniqueVals = (arr=[], field="") => {
  /* Takes an array of objs, returns an array of all unique values based on desired key
  Params:
  arr - the array you want to process
  field - the key you want to get unique values for
  */

  const arrayOfVals = arr.map(item => item[field])
  return [...new Set(arrayOfVals)];
}

export const createOptions = (arr) => {
  /* Takes an array of strings, returns an array of objects in format:
  {label: item, value: item} */
  
  return arr.map(item => ({"label": item, "value": item}))
}

export const filterOptions = (data, field, matchVal) => {
  /* Takes an array of objects, filters them based on field and matching value.
  Returns an empty array if no data provided */

  if (!data || !matchVal) {
    return []
  } else {
    const filteredVals = data.filter(item => item[field].toLowerCase() === matchVal.value.toLowerCase())
    const uniqueVals = getUniqueVals(filteredVals, "District Name")
    const schoolOptions = createOptions(uniqueVals)
    return schoolOptions
  }
}