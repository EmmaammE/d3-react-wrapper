import React from 'react';

interface GaugeProps {
  size: number,
  clipWidth: number,
  clipHeight: number,
  ringInset: number,
  ringWidth: number,


  maxValue: number,
  transitionMs: number
}

function Gauge({size, ringWidth, maxValue, transitionMs}: GaugeProps) {
  return (
    <g className="gauge-wrapper">
      
    </g>
  )
}

export default Gauge;