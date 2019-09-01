import React from "react";
import Select from "react-select";
import { createChildOptions } from '../../utils/processData/options'

const SelectSet = ({
  data,
  setNum,
  parentOptionsKey,
  parentOptions,
  parentLabel,
  parentValue,
  childOptionsKey,
  childLabel,
  childValue,
  handleSelect
}) => {
  const filterVal = parentValue ? parentValue.value : undefined;
  const childOptions = createChildOptions({
    data, 
    filterKey: parentOptionsKey, 
    filterVal,
    groupBy: childOptionsKey
  })

  return (
  <div className="select-set__container">
    <div className="select__container is-size-7">
      <Select
        name={`select${setNum}Parent`}
        options={parentOptions}
        onChange={handleSelect}
        placeholder={`Choose ${parentLabel}`}
        isClearable={true}
        value={parentValue}
      />
    </div>
    {parentValue && (
      <div className="select__container is-size-7">
        <Select
          name={`select${setNum}Child`}
          options={childOptions}
          onChange={handleSelect}
          placeholder={`Choose ${childLabel}`}
          isClearable={true}
          value={childValue}
        />
      </div>
    )}
  </div>
)};

export default SelectSet;
