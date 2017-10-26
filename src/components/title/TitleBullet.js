import React from 'react'

export default props => {
  const p = props.properties
  return (
    <div className="title-bullet">
      <svg>
        {p.stroke.map((prop, index) => {
          return (
            <circle
              key={index}
              stroke={prop}
              strokeWidth={p.strokeWidth[index]}
              strokeDasharray={p.strokeDasharray[index]}
            />
          )
        })}
      </svg>
    </div>
  )
}
