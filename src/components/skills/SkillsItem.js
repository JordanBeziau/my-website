import React, { Component } from 'react'

class SkillsItem extends Component {
  state = {
    toggleInfo : false
  }

  toggleInfo = () => this.setState({ toggleInfo : true })
  hideInfo = () => this.setState({ toggleInfo : false })

  render () {
    const { name, prettyName } = this.props.content
    return(
      <div className="column">
        <img
          src={ `/img/${ name }.png` }
          alt={ prettyName }
          onMouseOver={ this.toggleInfo }
          onMouseOut={ this.hideInfo }
        />
        { this.state.toggleInfo && (
          <div className="info-icon">
            { prettyName }
          </div>
        ) }
      </div>
    )
  }
}

export default SkillsItem
