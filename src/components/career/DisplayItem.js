import React, {  Component  } from 'react'

class DisplayItem extends Component {
  state = {
    display : false
  }
  componentDidMount() {
    this.isSelected(this.props.selectedItem)
  }
  componentWillReceiveProps(nextProps) {
    this.isSelected(nextProps.selectedItem)
  }

  isSelected = item => {
    item == this.props.content.id ?
      this.setState({ display : true }) :
      this.setState({ display : false })
  }

  render() {
    const { title, content, imageSource, imageDescription } = this.props.content

    return (
      <div className={ !this.state.display ?'hide period':'period' }>
        <main className="column">
          <h2>{ title }</h2>
          <div>{ content }</div>
        </main>
        <div className="column">
          <img src={ imageSource } alt={ imageDescription } />
        </div>
      </div>
    )
  }
}

export default DisplayItem
