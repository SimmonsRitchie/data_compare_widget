/* Functions to parse and process data */

export const getUniqueVals = (arr = [], field = "") => {
  /* Takes an array of objs, returns an array of all unique values based on desired key
  Params:
  arr - the array you want to process
  field - the key you want to get unique values for
  */
  const arrayOfVals = arr.map(item => item[field]);
  return [...new Set(arrayOfVals)];
};

export const createOptions = arr => {
  /* Takes an array of strings, returns an array of objects in format:
  {label: item, value: item} */

  return arr.map(item => ({ label: item, value: item }));
};

export const filterOptions = ({data, filterKey, filterVal, groupBy}) => {
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

export const filterArray = (data, field, matchVal) => {
  /* Takes an array of objects, filters them based on field and matching value.
  Returns an empty array if no data provided */

  if (!data || !matchVal) {
    return [];
  } else {
    return data.filter(
      item => item[field].toLowerCase() === matchVal.value.toLowerCase()
    );
  }
};

export const averageData = ({data, groupBy, fields=[], round=2}) => {
  /* Takes an array of objects, returns an object of average values based on 
  groupBy field.
  
  params
  data: Arr. Required. Array of objects with data to process
  groupBy: Str. Required. The key that you want to group all the objects by.
  fields: Arr. Required. The Keys that you want to average for each group
  round: Int. Optional. Number of dp to round averages to. Defaults to 2.
  
  */
  if (!data) {
    return {}
  }
  const uniqueGroups = getUniqueVals(data, groupBy);
  // Outer loop: {groupName: {field1: val, field2: val}}
  const groupAvgs = {}
  uniqueGroups.forEach(groupName => {
    const fieldAvgs = {}
    fields.forEach((field) => {
      const fieldTotal = data.reduce((total, item) => {
        if (item[groupBy] === groupName) {
          return total + +item[field];
        } else {
          return total;
        }
      }, 0);
      const groupLength = data.filter(item => item[groupBy] === groupName).length
      const fieldAvg = fieldTotal ? parseFloat(fieldTotal / groupLength).toFixed(round) : 0
      fieldAvgs[field] = fieldAvg
    })
    groupAvgs[groupName] = fieldAvgs
  });
  return groupAvgs;
};
