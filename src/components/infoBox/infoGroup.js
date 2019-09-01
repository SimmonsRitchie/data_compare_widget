import React from "react";

const InfoGroup = ({ groups, fields, data }) => (
  <div className="">
    {groups.map(group => {
      return (
        <div key={group} className="info-group__inner-container">
          <div className="info-group__title">{group}</div>
          <table className="table info-group__body">
            <tbody>
              {fields.map((field, idx) => {
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
);

export default InfoGroup;
