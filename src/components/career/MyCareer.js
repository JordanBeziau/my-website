import React, { Component } from 'react'
import SelectPeriod from './SelectPeriod'
import DisplayPeriod from './DisplayPeriod'
import data from '../../content/careerItems.js'
//const data = require('./content/careerItems')

class MyCareer extends Component {
  state = {
    selectedId : 1
  }
  getSelectedItem = selectedId => {
    this.setState({ selectedId })
  }
  render() {
    return(
      <div className="container">
        <SelectPeriod content={ data } selectedItem={ this.getSelectedItem } />
        <DisplayPeriod content={ data } selectedItem={ this.state.selectedId } />
      </div>
    )
  }
}

export default MyCareer
