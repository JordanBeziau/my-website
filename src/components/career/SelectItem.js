import React from 'react'

const SelectItem = (props) => {
  const selectedItem = event => {
    const item = event.target.getAttribute('data-id')
    Array.from(document.querySelectorAll('.select-period li')).forEach( element => {
      element.classList.remove('selected-item')
    })
    event.target.classList.add('selected-item')
    return props.selectedItem(item)
  }
  return (
    <li
      data-id={ props.dataId }
      onClick={ selectedItem }
      className={ props.dataId === 1 ? 'selected-item':'' }
    >
    </li>
  )
}

export default SelectItem
