import React from 'react'

export default (props) => {

  const selectedItem = event => {
    const item = event.target.parentElement.getAttribute('data-id')
    return props.selectedItem(item)
  }

  const setClassName = () =>{
    if (props.dataId == props.currentItem)
      return 'selected-item'
    if (props.currentItem == 1 && props.dataId == 2)
      return 'is-next'
    if(props.currentItem == 2 && props.dataId == 3)
      return 'is-next'
  }

  return (
    <li
      data-id={ props.dataId }
      onClick={ selectedItem }
      className={ setClassName() }
    >
      <i></i>
    </li>
  )
}
