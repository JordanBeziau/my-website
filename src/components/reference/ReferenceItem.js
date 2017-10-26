import React from 'react'
import GifIcon from './GifIcon'

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

  if (!props.isMobile) {
    return (
      <div className="column">
        <img src={props.setGifSource} alt="" onClick={clickGif} />
        <GifIcon isActive={refs[id]} />
        {(position !== 1 || !refs[id]) && (
          <div className="gif-actions">
            <div className="gif-play" onClick={clickGif}>
              <img src="/img/play.svg" alt="Play" title="Play" />
            </div>
            <a className="gif-link" href={gif.link} target="_blank">
              <img src="/img/link.svg" alt="Lien" title="Lien" />
            </a>
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div className="column">
        <img src={`/img/${gif.image}`} alt="" />
      </div>
    )
  }
}
