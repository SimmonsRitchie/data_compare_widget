import React from "react";
import { filterArray, averageData, getUniqueVals } from "./../../utils/handleData"
import InfoGroup from "./infoGroup"

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
    const groups = getUniqueVals(filteredData, groupBy)
    const stats = averageData({data: filteredData, groupBy, fields})
    const title = filteredData.length > 0 ? filteredData[0][childOptionsKey] : ""
    console.log(stats)
    return (
      <div className="box">
      <div>{title}</div>
      {stats && (
        <InfoGroup 
        groups={groups}
        fields={fields}
        data={stats}
        />
      )
      }
      </div>
    );
  }
}

export default InfoBox;
