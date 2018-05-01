import React, { Component } from 'react'

class Svg extends Component {
  render() {
    // const { text } = this
    // const {
    //   progress,
    //   size,
    //   bgColor,
    //   progressColor,
    //   lineWidth,
    //   animate,
    //   roundedStroke,
    //   responsive,
    // } = this.props
    // const strokeDashoffset = getOffset(progress)
    // const transition = animate ? 'stroke-dashoffset 1s ease-out' : null
    // const strokeLinecap = roundedStroke ? 'round' : 'butt'
    // const svgSize = responsive ? '100%' : size
    const svgSize = 25
    const bgColor = '#ecedf0'
    const lineWidth = '25'
    const progress = '50'
    const textColor = '#6b778c'
    const textStyle = { font: 'bold 2rem Helvetica, Arial, sans-serif' }

    return (
      <svg width={svgSize} height={svgSize} viewBox="-25 -25 400 400">
        <circle
          stroke={bgColor}
          cx="175"
          cy="175"
          r="175"
          strokeWidth={lineWidth}
          fill="none"
        />
        <text
          style={textStyle}
          fill={textColor}
          x="50%"
          y="50%"
          dx="-25"
          textAnchor="middle"
        >
          {progress}
          {/* <tspan dx={10}>%</tspan> */}
        </text>
      </svg>
    )
  }
}

export default Svg
