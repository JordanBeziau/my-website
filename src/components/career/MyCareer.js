import React, { Component } from 'react'
import TitleBullet from '../title/TitleBullet'
import SelectPeriod from './SelectPeriod'
import DisplayPeriod from './DisplayPeriod'
import data from '../../content/careerItems.js'

class MyCareer extends Component {
  state = {
    selectedId: 1
  }
  getSelectedItem = selectedId => {
    this.setState({ selectedId })
  }
  render() {
    const circleProps = {
      stroke: [
        'rgb(11, 52, 80)',
        'rgb(11, 52, 80)',
        'rgba(11, 52, 80, .6)',
        'rgb(11, 52, 80)',
        'rgba(11, 52, 80, .6)',
        'rgb(11, 52, 80)'
      ],
      strokeWidth: [1, 1, 3, 2, 1, 1],
      strokeDasharray: [31, 50, 27, 60, 15, 20]
    }

    console.log(data.careerItems[0].content.constructor === Array)
    return (
      <div className="container career">
        <div className="title-wrap">
          <TitleBullet properties={circleProps} />
          <h3 className="column">Mon parcours</h3>
        </div>
        <div>
          <SelectPeriod
            content={data}
            selectedItem={this.getSelectedItem}
            currentItem={this.state.selectedId}
          />
          <DisplayPeriod content={data} selectedItem={this.state.selectedId} />
        </div>
      </div>
    )
  }
}

export default MyCareer
