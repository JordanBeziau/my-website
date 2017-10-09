import React  from 'react'
import SelectItem from './SelectItem'

const SelectPeriod = (props) => {
  const selectedItem = item => props.selectedItem(item)
  return (
    <ul className="select-period column" id="career-selection">
      { props.content.careerItems.map(item =>
        <SelectItem
          key={ item.id }
          contentTitle={ item.title }
          dataId={ item.id }
          selectedItem= { selectedItem }
        />
      ) }
    </ul>
  )
}

export default SelectPeriod
