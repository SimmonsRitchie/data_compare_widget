import React from "react";
import SelectSet from "./SelectSet";

class SelectContainer extends React.Component {
  render() {
    const {
      countyOptions,
      select1Parent,
      select2Parent,
      handleSelect,
      exams
    } = this.props;

    return (
      <div className="select-container__container-outer">
        <SelectSet
          data={exams}
          setNum={1}
          parentOptions={countyOptions}
          parentLabel={"county"}
          parentValue={select1Parent}
          childLabel={"school district"}
          handleSelect={handleSelect}
        />
        <SelectSet
          data={exams}
          setNum={2}
          parentOptions={countyOptions}
          parentLabel={"county"}
          parentValue={select2Parent}
          childLabel={"school district"}
          handleSelect={handleSelect}
        />
      </div>
    );
  }
}

export default SelectContainer;
