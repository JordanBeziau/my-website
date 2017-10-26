import React, { Component } from 'react'
import ReferenceItem from './ReferenceItem'
import TitleBullet from '../title/TitleBullet'
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

    return (
      <section className="container my-references">
        <div className="title-wrap">
          <TitleBullet properties={circleProps} />
          <h3 className="column">Mes références</h3>
        </div>
        <main className="references-wrap">
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
        </main>
      </section>
    )
  }
}

export default MyReferences
