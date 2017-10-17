import React, { Component } from 'react'

class CanvasHeader extends Component {
  state = {
    deviceWidth: window.innerWidth
  }

  // properties
  properties = {
    color: 'rgba(202, 229, 235, .3)',
    lineDistance: 100,
    numParticles : this.setParticulesNumber(),
  }

  componentDidMount() {
    this.setCanvas()
    window.addEventListener('resize',  this.isResizing)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.isResizing)
  }
  componentDidUpdate() { this.setCanvas() }

  setCanvas() {
    console.log('mount')
    // Code to actually run canvas stuff
    const header = document.querySelector('.App-header')
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    //ctx    = canvas.getContext('2d').scale(2,2),
    // idle   = null, mousePosition

    canvas.width = this.state.deviceWidth * 2
    canvas.height = header.offsetHeight * 2
    canvas.style.width = this.state.deviceWidth+'px'
    canvas.style.height = header.offsetHeight+'px'
    canvas.style.display = 'block'

    ctx.fillStyle = this.properties.color
    //ctx.lineWidth = .5
    ctx.lineWidth = 1.5
    ctx.strokeStyle = this.properties.color

    // var dotNum = properties.numParticles
    var mousePosition = { x: 30 * canvas.width / 100, y: 30 * canvas.height / 100 },
      //dots = { nb: 600, distance: 80, d_radius: 3000, array: [] }
      dots = { nb: this.properties.numParticles, distance: this.properties.lineDistance, d_radius: 3000, array: [] }

    function Dot() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height

      this.vx = -.5 + Math.random()
      this.vy = -.5 + Math.random()

      this.radius = Math.random()
    }
    let dot
    Dot.prototype = {

      create: function() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fill()
      },

      animate: function() {

        for (let i = 0, dot=false; i < dots.nb; i++) {

          dot = dots.array[i]

          if (dot.y < 0 || dot.y > canvas.height) {
            dot.vx = dot.vx
            dot.vy = - dot.vy
          } else if (dot.x < 0 || dot.x > canvas.width) {
            dot.vx = - dot.vx
            dot.vy = dot.vy
          }
          dot.x += dot.vx
          dot.y += dot.vy
        }
      },

      line: function() {
        for (let i = 0; i < dots.nb; i++) {
          for (let j = 0; j < dots.nb; j++) {
            const i_dot = dots.array[i]
            const j_dot = dots.array[j]

            if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance) {
              if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius) {
                ctx.beginPath()
                ctx.moveTo(i_dot.x, i_dot.y)
                ctx.lineTo(j_dot.x, j_dot.y)
                ctx.stroke()
                ctx.closePath()
              }
            }
          }
        }
      }
    }

    function createDots() {
      requestAnimationFrame(createDots)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot())
        dot = dots.array[i]

        dot.create()
      }

      dot.line()
      dot.animate()
    }
    createDots()
  }

  setParticulesNumber() {
    return Math.round(this.state.deviceWidth * 0.1)
  }

  isResizing = () => {
    this.setState({ deviceWidth : window.innerWidth })
  }

  render() {
    console.log(this.properties.resize)
    return (
      <canvas />
    )
  }
}

export default CanvasHeader
