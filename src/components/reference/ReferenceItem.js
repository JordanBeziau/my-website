import React, { Component } from 'react'
import GifIcon from './GifIcon'

class ReferenceItem extends Component {
  state = {
    isActive : false
  }

  render () {
    const gif = this.props.content
    const img = new Image()
    img.src = `/img/${ gif.source }`

    const playGIF = (event) => {
      const file = event.target.src.split('.').filter(index => index === 'gif')
      if (file.join() === 'gif') {
        event.target.src = `/img/${ gif.image }`
        this.setState({ isActive : false })
      } else {
        event.target.src = img.src
        this.setState({ isActive : true })
      }
    }

    return (
      <div className="column">
        <img
          src={ `/img/${ gif.image }` }
          alt=""
          onClick={ (e) => playGIF(e) }
        />
        <GifIcon isActive={ this.state.isActive } />
      </div>
    )
  }
}

export default ReferenceItem
