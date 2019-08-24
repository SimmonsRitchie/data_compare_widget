import React from "react";
import { csv } from "d3-fetch";
import { getUniqueVals, createOptions } from "./../utils/handleData";
import SelectContainer from "./select/SelectContainer";

class Body extends React.Component {
  state = {
    exams: [],
    countyOptions: [],
    schoolOptions: [],
    select1Parent: null,
    select1Child: null,
    select2Parent: null,
    select2Child: null
  };

  componentDidMount() {
    const csvFilePath = "./data/exams_2018.csv";
    Promise.all([csv(csvFilePath)]).then(([exams]) => {
      const counties = getUniqueVals(exams, "County");
      const countyOptions = createOptions(counties);
      const schoolDistricts = getUniqueVals(exams, "School Name");
      const schoolOptions = createOptions(schoolDistricts);
      this.setState({
        exams,
        countyOptions,
        schoolOptions
      });
    });
  }

  handleSelect = (selection,meta) => {
    console.log(selection,meta);
    this.setState({
      [meta.name]: selection.value
    })
  };

  render() {
    const { exams, countyOptions, schoolOptions, select1Parent, select2Parent } = this.state;

    return (
      <div className="body__container has-text-centered">
        <SelectContainer
          handleSelect={this.handleSelect}
          countyOptions={countyOptions}
          schoolOptions={schoolOptions}
          select1Parent={select1Parent}
          select2Parent={select2Parent}
        />
      </div>
    );
  }
}

export default Body;
