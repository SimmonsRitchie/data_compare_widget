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
  return arr.map(item => ({"label": item, "value": item}))
}

export const filterOptions = (data, field, matchVal) => {
  if (!data || !matchVal) {
    return []
  } else {
    const filteredVals = data.filter(item => item[field].toLowerCase() === matchVal.value.toLowerCase())
    const uniqueVals = getUniqueVals(filteredVals, "District Name")
    const schoolOptions = createOptions(uniqueVals)
    console.log(schoolOptions)
    return schoolOptions
  }
}