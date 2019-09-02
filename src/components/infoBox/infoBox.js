import React from "react";
import { filterArray } from "../../utils/process/helpers"
import { formatData } from "../../utils/display/displayData"
import InfoGroup from "./infoGroup"
import InfoIcon from './infoIcon'

class InfoBox extends React.Component {
  render() {
    const {
      selectedChildVal,
      data,
      childOptionsKey,
      fields,
    } = this.props;
    // Filter data based on child input
    const filterVal = selectedChildVal ? selectedChildVal.value : undefined
    const selectedData = filterArray(data, childOptionsKey, filterVal)[0];
    const title = selectedData[childOptionsKey]
    return (
      <div className="box info-box__container">
      <div className="info-box__title">{title}</div>
      <InfoIcon icon="school" />
      {selectedData && (
        <InfoGroup 
        fields={fields}
        data={selectedData.data}
        />
      )
      }
      </div>
    );
  }
}

export default InfoBox;
