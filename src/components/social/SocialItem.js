import React, { Component } from 'react'

class SocialItem extends Component {
  state = {
    toggleInfo : false
  }

  toggleInfo = () => this.setState({ toggleInfo : true })
  hideInfo = () => this.setState({ toggleInfo : false })

  render() {
    return (
      <div className="column">
        <a href={ this.props.content.link } target="_blank" >
          <img
            src={ this.props.content.icon }
            alt=""
            onMouseOver={ this.toggleInfo }
            onMouseOut={ this.hideInfo }
          />
        </a>
        { this.state.toggleInfo && (
          <div className="info-icon">
            { this.props.content.name }
          </div>
        ) }
      </div>
    )
  }
}

export default SocialItem
