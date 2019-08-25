import React from "react";
import { filterArray, averageData } from "./../../utils/handleData"

class InfoBox extends React.Component {
  render() {
    const {
      selection,
      data,
      filterKey,
      groupBy,
      fields,
    } = this.props;
    const filteredData = filterArray(data, filterKey, selection)
    const info = averageData({data: filteredData, groupBy, fields})
    console.log(info)

    return (
      <div>
      </div>
    );
  }
}

export default InfoBox;
