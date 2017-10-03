import React, { Component } from 'react'

class SelectItem extends Component {
  selectedItem = event => {
    const item = event.target.getAttribute('data-id')
    return this.props.selectedItem(item)
  }
  render() {
    return (
      <li
        data-id={ this.props.dataId }
        onClick={ this.selectedItem }
      >
        { this.props.contentTitle }
      </li>
    )
  }
}

export default SelectItem
