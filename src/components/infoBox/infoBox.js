import React from "react";
import { filterArray, averageData } from "./../../utils/handleData"

class InfoBox extends React.Component {
  render() {
    const {
      selection,
      data,
      childOptionsKey,
      groupBy,
      fields,
    } = this.props;
    const filteredData = filterArray(data, childOptionsKey, selection)
    const stats = averageData({data: filteredData, groupBy, fields})
    console.log(filteredData)
    const title = filteredData.length > 0 ? filteredData[0][childOptionsKey] : ""
    console.log(stats)
    console.log(title)
    return (
      <div className="container__inner-half">
      <div>{title}</div>
      </div>
    );
  }
}

export default InfoBox;
