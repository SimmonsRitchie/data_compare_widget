import React from "react";


const InfoGroup = ({groups, fields, data}) => (
  <div className="info-box__info-group">
  {groups.map(group => {
    return (
      <div key={group}>
      {group}
        {
          fields.map((field, idx) => {
            return <div key={field + idx}>{`${field}: ${data[group][field]}`}</div>
          })
        }
      </div>
    )
  })}
</div>
)

export default InfoGroup