import React from "react";
import { filterArray, averageData, getUniqueVals } from "./../../utils/handleData"
import InfoGroup from "./infoGroup"
import InfoIcon from './infoIcon'

class InfoBox extends React.Component {
  render() {
    const {
      selection,
      data,
      childOptionsKey,
      groupBy,
      fields,
    } = this.props;
    // Filter data based on child input
    const filteredData = filterArray(data, childOptionsKey, selection)
    // Get data groups, eg. Algebra 1, Literature, etc.
    const groups = getUniqueVals(filteredData, groupBy)
    // Get list of fields
    const fieldArr = getUniqueVals(fields,'name')
    console.log("field arr",fieldArr)
    // Average
    const stats = averageData({data: filteredData, groupBy, fields: fieldArr})
    console.log(stats)
    const title = filteredData.length > 0 ? filteredData[0][childOptionsKey] : ""
    return (
      <div className="box info-box__container">
      <div className="info-box__title">{title}</div>
      <InfoIcon icon="school" />
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
