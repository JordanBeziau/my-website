import React, { Component } from 'react'
import ReferenceItem from './ReferenceItem'
import references from '../../content/references'

class MyReferences extends Component {
  state = {
    refs : [
      false,
      false,
      false,
    ]
  }

  setGif = (gif) => {
    this.setState(gif)
  }

  render() {
    return(
      <div className="container my-references">
        <h3 className="column">Mes références</h3>
        <div>
          {
            references.map(
              item =>
                <ReferenceItem
                  content={ item }
                  key={ item.id }
                  state={ this.state }
                  setGif={ this.setGif }
                />
            )
          }
        </div>
      </div>
    )
  }
}

export default MyReferences
