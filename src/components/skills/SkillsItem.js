import React from 'react'

export default (props) => {
  return(
    <div className="column">
      <img src={ `/img/${props.content}.png` } alt="" />
    </div>
  )
}
