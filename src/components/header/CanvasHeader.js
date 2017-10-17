import React, { Component } from 'react'
import setCanvas from '../../utils/canvasFunction'

class CanvasHeader extends Component {
  state = {
    deviceWidth: window.innerWidth
  }

  properties = {
    color: 'rgba(202, 229, 235, .3)',
    lineDistance: 100,
    numParticles : this.setParticulesNumber(),
  }

  componentDidMount() {
    setCanvas(this.state.deviceWidth, this.properties)
    window.addEventListener('resize',  this.isResizing)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.isResizing)
  }
  componentDidUpdate() {
    this.properties.numParticles = this.setParticulesNumber()
    setCanvas(this.state.deviceWidth, this.properties)
  }

  setParticulesNumber() {
    return Math.round(this.state.deviceWidth * 0.1)
  }

  isResizing = () => {
    this.setState({ deviceWidth : window.innerWidth })
  }

  render() {
    return (
      <canvas />
    )
  }
}

export default CanvasHeader
