/* PROCESS DATA:

Functions to parse and process data */

import {averageData} from './agg'
import {getUniqueVals, filterArray} from './helpers'

export const processData = ({data, filters, groupBy, fields, parentOptionsKey, childOptionsKey}) => {
  /* This function expects an array of objects where each object represents a row in a CSV file. It 
  expects many rows to relate to the same entity, eg. a specific school district.L0

  It first groups those rows together and then performs an aggregate analysis of that group based on
  a specified key.

  PARAMS
  :data - Array. Required. An array of objects with common keys.
  :fields - Array. Required. An array of objects that includes field names and other meta values
    for parsing and formatting.
  */
  if (filters) {
    filters.forEach(filter => {
      data = data.filter(item => !item[filter.field].match(filter.matchVal)) 
      })
    }

  // Create list of names of child items
  const childOptionItems = getUniqueVals(data, childOptionsKey);
  // Create list of desired fields in child items
  const fieldArr = getUniqueVals(fields, "name");
  // Process data
  const processedData = childOptionItems.map(childName => {
    const childData = filterArray(data, childOptionsKey, childName)
    const avgData = averageData({data: childData, fields: fieldArr, groupBy: groupBy})
    const parentOptionsVal = childData[0][parentOptionsKey]
    return {
      [childOptionsKey]: childName,
      [parentOptionsKey]: parentOptionsVal,
      data: avgData}
  })
  // Format data for display (eg. add '%', change names if needed)
  return processedData;
};


