import React, { Component } from 'react'
import DisplayItem from './DisplayItem'

class DisplayPeriod extends Component {
  render() {
    return (
      <div>
        {
          this.props.content.careerItems.map(item =>
            <DisplayItem
              key={ item.id }
              content={ item }
              selectedItem={ this.props.selectedItem }
            />
          )
        }
      </div>
    )
  }
}

export default DisplayPeriod
