import React, { Component } from 'react'
import SelectItem from './SelectItem'

class SelectPeriod extends Component {
  selectedItem = item => this.props.selectedItem(item)
  render() {
    return (
      <ul className="select-period">
        { this.props.content.careerItems.map(item =>
          <SelectItem
            key={ item.id }
            contentTitle={ item.title }
            dataId={ item.id }
            selectedItem= { this.selectedItem }
          />
        ) }
      </ul>
    )
  }
}

export default SelectPeriod
