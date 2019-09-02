/* AGGREGATE FUNCTIONS:
These funcs make calculations of our data in some way.
*/

import {getUniqueVals} from './helpers'

export const averageData = ({ data, groupBy, fields, round = 2 }) => {
  /* Takes an array of objects, returns an object of average values based on 
  groupBy field.
  
  params
  data: Arr. Required. Array of objects with data to process
  groupBy: Str. Required. The key that you want to group all the objects by.
  fields: Arr. Required. The Keys that you want to average for each group
  round: Int. Optional. Number of dp to round averages to. Defaults to 2.
  
  */
  const uniqueGroups = getUniqueVals(data, groupBy);
  // Outer loop: {groupName: {field1: val, field2: val}}
  const groupAvgs = {};
  uniqueGroups.forEach(groupName => {
    const fieldAvgs = {};
    fields.forEach(field => {
      const fieldTotal = data.reduce((total, item) => {
        if (item[groupBy] === groupName) {
          return total + +item[field];
        } else {
          return total;
        }
      }, 0);
      const groupLength = data.filter(item => item[groupBy] === groupName)
        .length;
      const fieldAvg = fieldTotal ? fieldTotal / groupLength : 0
      fieldAvgs[field] = fieldAvg;
    });
    groupAvgs[groupName] = fieldAvgs;
  });
  return groupAvgs;
};
