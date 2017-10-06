import React from 'react'

export default (props) => {
  return (
    <div className={ props.isActive ? 'gif-icon is-active':'gif-icon' }>
      gif
    </div>
  )
}
