import React from 'react';
import './svgWrapper.svg.css';

interface svgProps {
  width: number,
  height: number,
  children: React.ReactNode,
}

function SvgWrapper({width, height, children}: svgProps) {
  return (
    <div className="svg-wrapper">
      <svg 
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
      >
        {children}
      </svg>
    </div>
  )
}

export default SvgWrapper;