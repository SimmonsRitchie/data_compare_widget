export const formatData = (data, formatFields) => {
  const groups = Object.keys(data);
  const formattedData = {};
  groups.forEach(groupName => {
    const formattedGroup = {};
    formatFields.forEach(formatField => {
      let fieldName = formatField.name;
      let fieldData = data[groupName][formatField.name];
      if (formatField.displayName) {
        fieldName = formatField.displayName;
      }
      if (formatField.format) {
        fieldData = formatField.format(fieldData);
      }
      formattedGroup[fieldName] = fieldData
    });
    formattedData[groupName] = formattedGroup
  });
  return formattedData
};

export const getDisplayFieldNames = (fields) => {
  return fields.map(field => field.displayName ? field.displayName : field.name)
}