import React, { Component } from 'react'
import './App.css'
import {
  HeaderMainContent,
  CanvasHeader,
  MyCareer,
  MySkills,
  MyReferences,
  SocialNetwork
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
        <MySkills />
        <MyReferences />
        <SocialNetwork />
      </div>
    )
  }
}

export default App
