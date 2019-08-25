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

export const filterOptions = (data, field, matchVal) => {
  /* Takes an array of objects, filters them based on field and matching value.
  Returns an empty array if no data provided */

  if (!data || !matchVal) {
    return [];
  } else {
    const filteredVals = filterArray(data, field, matchVal);
    const uniqueVals = getUniqueVals(filteredVals, "District Name");
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

export const averageData = ({data, groupBy, fields=[]}) => {
  /* Takes an array of objects, returns an object of average values based on 
  groupBy field.
  
  params
  data: Arr. Array of objects with data to process
  groupBy: Str. The key that you want to group all the objects by.
  fields: Arr. The Keys that you want to average for each group
  
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
      const fieldAvg = fieldTotal ? fieldTotal / groupLength : 0
      fieldAvgs[field] = fieldAvg
    })
    groupAvgs[groupName] = fieldAvgs
  });
  return groupAvgs;
};
