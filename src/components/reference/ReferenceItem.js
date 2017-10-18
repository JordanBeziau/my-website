import React, { Component } from 'react'
import GifIcon from './GifIcon'
import GifLink from './GifLink'

export default (props) => {
  const gif = props.content
  const refs = props.state.refs
  const img = new Image()
  img.src = `/img/${ gif.source }`

  const clickGif = () => {
    const result = { }
    result['refs'] = refs.map(
      (item, index) => gif.id === (index + 1) ? !refs[gif.id - 1] : false
    )
    return props.setGif(result)
  }

  return (
    <div className="column">
      <div className="gif-wrap">
        <img
          src={ refs[gif.id - 1]  ? `/img/${ gif.source }`:`/img/${ gif.image }` }
          alt=""
          onClick={ clickGif }
        />
        <GifIcon isActive={ refs[gif.id - 1] } />
      </div>
      <GifLink link={ gif.link } />
    </div>
  )
}
