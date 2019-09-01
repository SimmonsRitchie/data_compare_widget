import React from "react";
import { getUniqueVals } from "./../../utils/handleData"

const InfoGroup = ({ groups, fields, data }) => {
  const fieldsArr = getUniqueVals(fields, 'name')
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
                    <td>{data[group][field]}</td>
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
