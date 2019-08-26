import React from "react";


const InfoGroup = ({groups, fields, data}) => (
  <div className="">
  {groups.map(group => {
    return (
      <div key={group} className="info-group__inner-container">
      <div className="info-group__title">{group}</div>
      <div className="info-group__body">
        {
          fields.map((field, idx) => {
            return <div key={field + idx}>{`${field}: ${data[group][field]}`}</div>
          })
        }
      </div>
      </div>
    )
  })}
</div>
)

export default InfoGroup