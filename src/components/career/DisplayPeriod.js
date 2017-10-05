import React from 'react'
import DisplayItem from './DisplayItem'

const DisplayPeriod = (props) => {
  return (
    <div className="period-wrap">
      {
        props.content.careerItems.map(item =>
          <DisplayItem
            key={ item.id }
            content={ item }
            selectedItem={ props.selectedItem }
          />
        )
      }
    </div>
  )
}

export default DisplayPeriod
