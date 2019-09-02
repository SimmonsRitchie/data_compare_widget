import React from "react";
import { formatData, getDisplayFieldNames } from "../../utils/display/displayData"


const InfoGroup = ({ data, fields }) => {
  const groups = Object.keys(data)
  const formattedData = formatData(data, fields)
  const fieldsArr = getDisplayFieldNames(fields)
  return (
  <div className="">
    {groups.map(group => {
      return (
        <div key={group} className="info-group__inner-container">
          <div className="info-group__title">{group}</div>
          <table className="table info-group__body">
          <tbody>
            {fieldsArr.map((field, idx) => {
              return (
                <tr key={field + idx}>
                  <td>{field}</td>
                  <td>{formattedData[group][field]}</td>
                </tr>
              );
            })}
          </tbody>
          </table>
        </div>
      );
    })}
  </div>
);}

export default InfoGroup;

