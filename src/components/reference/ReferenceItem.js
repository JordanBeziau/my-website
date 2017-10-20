import React from 'react'
import GifIcon from './GifIcon'
import GifLink from './GifLink'

export default props => {
  const gif = props.content,
    refs = props.state.refs,
    id = gif.id - 1
  const position = props.order[id]
  const img = new Image()
  img.src = `/img/${gif.source}`

  const displayPosition = () => {
    switch (position) {
    case 1:
      return 'first '
    case 2:
      return 'second '
    default:
      return 'last '
    }
  }

  const clickGif = () => {
    const result = {}
    result['refs'] = refs.map(
      (item, index) => (gif.id === index + 1 ? !refs[id] : false)
    )
    if (position !== 1) {
      result['order'] = []
      props.order.forEach((pos, index) => {
        if (pos === 1) {
          result['order'][index] = 3
        } else {
          position === pos
            ? (result['order'][index] = 1)
            : (result['order'][index] = 2)
        }
      })
    }
    return props.setGif(result)
  }

  return (
    <div className={displayPosition() + 'column'}>
      <img
        src={
          refs[id]
            ? `/img/${gif.source}`
            : position !== 1 ? `/img/${gif.small}` : `/img/${gif.image}`
        }
        alt=""
        onClick={clickGif}
      />
      <GifIcon isActive={refs[id]} />

      {/*<GifLink link={gif.link} />*/}
    </div>
  )
}
