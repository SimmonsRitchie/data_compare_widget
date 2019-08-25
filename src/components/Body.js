import React from "react";
import { csv } from "d3-fetch";
import { getUniqueVals, createOptions } from "./../utils/handleData";
import ContainerSplit from "./container/ContainerSplit";
import InfoBox from "./infoBox/InfoBox";
import SelectSet from "./select/SelectSet";

class Body extends React.Component {
  state = {
    exams: [],
    countyOptions: [],
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
      this.setState({
        exams,
        countyOptions
      });
    });
  }

  handleSelect = (selection, meta) => {
    console.log(selection, meta);
    this.setState({
      [meta.name]: selection
    });
  };

  render() {
    const {
      exams,
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
            data={exams}
            setNum={1}
            parentOptions={countyOptions}
            parentLabel={"county"}
            parentValue={select1Parent}
            childLabel={"school district"}
            childValue={select1Child}
            handleSelect={this.handleSelect}
          />
          <SelectSet
            data={exams}
            setNum={2}
            parentOptions={countyOptions}
            parentLabel={"county"}
            parentValue={select2Parent}
            childLabel={"school district"}
            childValue={select2Child}
            handleSelect={this.handleSelect}
          />
        </ContainerSplit>
        <ContainerSplit>
          <InfoBox />
          <InfoBox />
        </ContainerSplit>
      </div>
    );
  }
}

export default Body;
