import React from "react";
import Select from "react-select";
import { filterOptions } from '../../utils/handleData'

const SelectSet = ({
  data,
  setNum,
  parentOptions,
  parentLabel,
  parentValue,
  childLabel,
  handleSelect
}) => {
  const childOptions = filterOptions(data, "County", parentValue)

  return (
  <div className="select-container__inner-half">
    <div className="select-container__select is-size-7">
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
      <div className="select-container__select is-size-7">
        <Select
          name={`select${setNum}Child`}
          options={childOptions}
          onChange={handleSelect}
          placeholder={`Choose ${childLabel}`}
          isClearable={true}
        />
      </div>
    )}
  </div>
)};

export default SelectSet;
