import React, { Component } from 'react'
import './App.css'
import {
  HeaderMainContent,
  CanvasHeader,
  MyCareer
} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <HeaderMainContent className="App-header-content-wrap" />
          <CanvasHeader />
        </div>
        <MyCareer />
      </div>
    )
  }
}

export default App
