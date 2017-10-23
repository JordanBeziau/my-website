import React, { Component } from 'react'
import ReferenceItem from './ReferenceItem'
import references from '../../content/references'

class MyReferences extends Component {
  state = {
    refs: [false, false, false],
    order: [0, 1, 2]
  }

  setGif = gif => {
    this.setState(gif)
  }

  setGifSource = (item, index) => {
    return this.state.refs[item]
      ? `/img/${references[item].source}`
      : index === 0
        ? `/img/${references[item].image}`
        : `/img/${references[item].small}`
  }

  render() {
    return (
      <div className="container my-references">
        <h3 className="column">Mes références</h3>
        <div className="references-wrap">
          {this.state.order.map((item, index) => (
            <ReferenceItem
              content={references[item]}
              key={references[item].id}
              state={this.state}
              setGif={this.setGif}
              setGifSource={this.setGifSource(item, index)}
              position={index + 1}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default MyReferences
