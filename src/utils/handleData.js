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

export const averageData = data => {
  /* Takes an array of objects, returns an average of key values for a selected key */
  if (!data) {
    return []
  }
  console.log("Input data:", data);
  const groupBy = "Subject";
  const fields = ["Number Scored","Percent Advanced","Percent Basic","Percent Below Basic","Percent Proficient"];
  const uniqueGroups = getUniqueVals(data, groupBy);
  console.log(uniqueGroups);
  // Outer loop: {groupName: {field1: val, field2: val}}
  const avgVals = uniqueGroups.map(groupName => {
    
    const fieldAvgs = fields.map((field) => {
      const fieldTotal = data.reduce((total, item) => {
        if (item[groupBy] === groupName) {
          console.log("match", item[groupBy]);
          console.log(field, +item[field]);
          console.log("running total", total);
          return total + +item[field];
        } else {
          return total;
        }
      }, 0);
      const groupLength = data.filter(item => item[groupBy] === groupName).length
      console.log(groupLength)
      const fieldAvg = fieldTotal ? fieldTotal / groupLength : 0
      return {[field]:fieldAvg}
    })
    return {[groupName]: {...fieldAvgs}}
  });
  return avgVals;
};
