import React from 'react'

export default props => {
  return (
    <div className="title-bullet">
      <svg>
        {props.properties.stroke.map((prop, index) => {
          return (
            <circle
              key={index}
              stroke={prop}
              strokeWidth={props.properties.strokeWidth[index]}
              strokeDasharray={props.properties.strokeDasharray[index]}
            />
          )
        })}
      </svg>
    </div>
  )
}
