import React, { Component } from 'react'
import SelectPeriod from './SelectPeriod'
import DisplayPeriod from './DisplayPeriod'
import data from '../../content/careerItems.js'

class MyCareer extends Component {
  state = {
    selectedId : 1
  }
  getSelectedItem = selectedId => {
    this.setState({ selectedId })
  }
  render() {
    return(
      <div className="container career">
        <h3 className="column">Mon parcours</h3>
        <div>
          <SelectPeriod content={ data } selectedItem={ this.getSelectedItem } />
          <DisplayPeriod content={ data } selectedItem={ this.state.selectedId } />
        </div>
      </div>
    )
  }
}

export default MyCareer
