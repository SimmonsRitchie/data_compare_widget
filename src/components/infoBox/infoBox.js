import React from "react";
import { filterArray, averageData } from "./../../utils/handleData"

class InfoBox extends React.Component {
  render() {
    const {
      selection,
      data,
      filterKey
    } = this.props;
    const filteredData = filterArray(data, filterKey, selection)
    const info = averageData(filteredData)
    console.log(info)

    return (
      <div>
      </div>
    );
  }
}

export default InfoBox;
