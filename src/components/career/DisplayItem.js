import React, { Component } from 'react'

class DisplayItem extends Component {
  state = {
    display: false,
    width: window.innerWidth < 768
  }
  componentDidMount() {
    this.isSelected(this.props.selectedItem)
    window.addEventListener('resize', this.setWidth)
  }
  componentWillReceiveProps(nextProps) {
    this.isSelected(nextProps.selectedItem)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.setWidth)
  }
  setWidth = () => {
    this.setState({ width: window.innerWidth < 768 })
  }
  isSelected = item => {
    item == this.props.content.id
      ? this.setState({ display: true })
      : this.setState({ display: false })
  }

  render() {
    const { title, content, imageSource, imageDescription } = this.props.content

    return (
      <div className={!this.state.display ? 'hide period' : 'period'}>
        <main className="column">
          <h4>{title}</h4>
          {content.constructor === Array ? (
            content.map((paragraph, index) => (
              <p key={index}>
                <strong className="formation-titre">{paragraph.titre}</strong>
                <span className="formation-niveau">{paragraph.niveau}</span>
                <span className="formation-lieu">{paragraph.lieu}</span>
                <br />
                <span>{paragraph.competences}</span>
              </p>
            ))
          ) : (
            <p>{content}</p>
          )}
        </main>
        {!this.state.width && (
          <div className="column">
            <img
              className="main-img"
              src={imageSource}
              alt={imageDescription}
            />
          </div>
        )}
      </div>
    )
  }
}

export default DisplayItem
