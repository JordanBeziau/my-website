import React, { Component } from 'react'
import ReferenceItem from './ReferenceItem'
import references from '../../content/references'

class MyReferences extends Component {
  state = {
    refs: [false, false, false],
    order: [1, 2, 3]
  }

  setGif = gif => {
    this.setState(gif)
  }

  render() {
    console.log(references[1])
    return (
      <div className="container my-references">
        <h3 className="column">Mes références</h3>
        <div>
          {references.map(item => (
            <ReferenceItem
              content={item}
              key={item.id}
              state={this.state}
              order={this.state.order}
              setGif={this.setGif}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default MyReferences
