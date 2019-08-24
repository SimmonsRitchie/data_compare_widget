import React from "react";
import Select from "react-select";

const SelectSet = ({
  setNum,
  parentOptions,
  parentLabel,
  parentValue,
  childOptions,
  childLabel,
  handleSelect
}) => (
  <div className="select-container__inner-half">
    <div className="select-container__select is-size-7">
      <Select
        name={`select${setNum}Parent`}
        options={parentOptions}
        onChange={handleSelect}
        placeholder={`Choose ${parentLabel}`}
      />
    </div>
    {parentValue && (
      <div className="select-container__select is-size-7">
        <Select
          name={`select${setNum}Child`}
          options={childOptions}
          onChange={handleSelect}
          placeholder={`Choose ${childLabel}`}
        />
      </div>
    )}
  </div>
);

export default SelectSet;
