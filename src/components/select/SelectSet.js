import React from "react";
import Select from "react-select";
import { filterOptions } from '../../utils/handleData'

const SelectSet = ({
  data,
  setNum,
  parentOptionsKey,
  parentOptions,
  parentLabel,
  parentValue,
  childLabel,
  childValue,
  handleSelect
}) => {
  const childOptions = filterOptions(data, parentOptionsKey, parentValue)

  return (
  <div className="container__inner-half">
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
