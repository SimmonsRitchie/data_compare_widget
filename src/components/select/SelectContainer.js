import React from "react";
import SelectSet from "./SelectSet";

class SelectContainer extends React.Component {
  render() {
    const {
      schoolOptions,
      countyOptions,
      select1Parent,
      select2Parent,
      handleSelect
    } = this.props;

    return (
      <div className="select-container__container-outer">
        <SelectSet
          setNum={1}
          parentOptions={countyOptions}
          parentLabel={"county"}
          parentValue={select1Parent}
          childOptions={schoolOptions}
          childLabel={"school district"}
          handleSelect={handleSelect}
        />
        <SelectSet
          setNum={2}
          parentOptions={countyOptions}
          parentLabel={"county"}
          parentValue={select2Parent}
          childOptions={schoolOptions}
          childLabel={"school district"}
          handleSelect={handleSelect}
        />
      </div>
    );
  }
}

export default SelectContainer;
