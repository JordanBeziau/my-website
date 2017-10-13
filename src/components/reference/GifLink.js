import React from 'react'

export default (props) => {
  return (
    <a className="gif-link" href={ props.link } target="_blank">
      Voir le site
      <svg>
        <line className="left" x1="0" y1="30" x2="0" y2="0" />
        <line className="top-left" x1="0" y1="0" x2="70" y2="0" />
        <line className="top-right" x1="140" y1="0" x2="70" y2="0" />
        <line className="right" x1="140" y1="30" x2="140" y2="0" />
      </svg>
    </a>
  )
}
