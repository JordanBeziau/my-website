import React from 'react'
import GifIcon from './GifIcon'
import GifLink from './GifLink'

export default props => {
  const gif = props.content,
    refs = props.state.refs,
    id = gif.id - 1
  const position = props.position
  const img = new Image()
  img.src = `/img/${gif.source}`

  const clickGif = () => {
    const result = {}
    result['refs'] = refs.map(
      (item, index) => (gif.id === index + 1 ? !refs[id] : false)
    )
    if (position !== 1) {
      result['order'] = [
        id,
        props.state.order[1] === id
          ? props.state.order[2]
          : props.state.order[1],
        props.state.order[0]
      ]
    }
    return props.setGif(result)
  }

  return (
    <div className="column">
      <img src={props.setGifSource} alt="" onClick={clickGif} />
      <GifIcon isActive={refs[id]} />
      <div className="gif-actions">
        <div className="gif-play" />
        <a className="gif-link" href={gif.link} target="_blank">
          <img src="/img/link.svg" />
        </a>
      </div>
      {/*<GifLink link={gif.link} />*/}
    </div>
  )
}
