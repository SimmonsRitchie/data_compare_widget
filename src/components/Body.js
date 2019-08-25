import React from "react";
import { csv } from "d3-fetch";
import { getUniqueVals, createOptions } from "./../utils/handleData";
import ContainerSplit from "./container/ContainerSplit";
import InfoBox from "./infoBox/InfoBox";
import SelectSet from "./select/SelectSet";

//  ---------------------- DATA CONFIG  ----------------------------
/* Set these values based on how you want to process your data */

// SELECTS
const parentLabel = "county"
const childLabel = "school district"

// INFO BOX
const filterKey = "District Name"
// Data will be grouped by this key name.
const groupBy = "Subject";
// Data within each group will be averaged based on these key names:
const fields = [
  "Number Scored",
  "Percent Advanced",
  "Percent Basic",
  "Percent Below Basic",
  "Percent Proficient"
];
// ---------------------------------------------------------------------

class Body extends React.Component {
  state = {
    data: [],
    countyOptions: [],
    select1Parent: null,
    select1Child: null,
    select2Parent: null,
    select2Child: null
  };

  componentDidMount() {
    const csvFilePath = "./data/exams_2018.csv";
    Promise.all([csv(csvFilePath)]).then(([data]) => {
      const counties = getUniqueVals(data, "County");
      const countyOptions = createOptions(counties);
      this.setState({
        data,
        countyOptions
      });
    });
  }

  handleSelect = (selection, meta) => {
    this.setState({
      [meta.name]: selection
    });
  };

  render() {
    const {
      data,
      countyOptions,
      select1Parent,
      select2Parent,
      select1Child,
      select2Child
    } = this.state;

    return (
      <div className="container__body has-text-centered">
        <ContainerSplit>
          <SelectSet
            data={data}
            setNum={1}
            parentOptions={countyOptions}
            parentLabel={parentLabel}
            parentValue={select1Parent}
            childLabel={childLabel}
            childValue={select1Child}
            handleSelect={this.handleSelect}
          />
          <SelectSet
            data={data}
            setNum={2}
            parentOptions={countyOptions}
            parentLabel={parentLabel}
            parentValue={select2Parent}
            childLabel={childLabel}
            childValue={select2Child}
            handleSelect={this.handleSelect}
          />
        </ContainerSplit>
        <ContainerSplit>
          <InfoBox
            selection={select1Child}
            data={data}
            filterKey={filterKey}
            groupBy={groupBy}
            fields={fields}
          />
          <InfoBox
            selection={select2Child}
            data={data}
            filterKey={filterKey}
            groupBy={groupBy}
            fields={fields}
          />
        </ContainerSplit>
      </div>
    );
  }
}

export default Body;
