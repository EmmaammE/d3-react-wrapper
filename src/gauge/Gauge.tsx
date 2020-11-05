/**
 * Inspired by https://bl.ocks.org/rishabhfitkids/305e8da9f4311917c6046afcf7bfd0bc
 */
import React, { useMemo, useState } from 'react';
import * as d3 from "d3";

export interface GaugeProps {
  size?: number,
  clipWidth?: number,
  clipHeight?: number,
  ringInset?: number,
  ringWidth?: number,

  // the angle's domain
  minAngle?: number,
  maxAngle?: number,

  maxValue?: number,
  transitionMs?: number,

  majorTicks?: number,

  arcColorDomain?: string[],
}

const deg2rad = (deg: number) => {
  return deg * Math.PI / 180;
}

function Gauge({
  size = 300, 
  ringWidth = 20,
  ringInset = 20, 
  maxValue, 
  transitionMs = 400,
  minAngle = -90,
  maxAngle = 90,
  majorTicks = 5,
  arcColorDomain = ['#e8e2cb', '#3e6c0a'],
}: GaugeProps) {
  
  const [range, setRange] = useState<number>(maxAngle - minAngle);
  const arcColorFn = d3.interpolateHsl(d3.rgb(arcColorDomain[0]), d3.rgb(arcColorDomain[1]));
  
  const [tickData, setTickData] = useState<number[]>(d3.range(majorTicks).map(() => 1/majorTicks));

  const toCenter = useMemo(
    () => {
      return `translate(${size/2}, ${size/2})`
    },
    [size]
  );

  const arc = useMemo(
    () => {
      return d3.arc().innerRadius(size/2 - ringWidth - ringInset)
        .outerRadius(size/2 - ringInset)
        .startAngle((d: any, i) => {
          return deg2rad(minAngle + (d * i * range));
        })
        .endAngle((d: any, i) => {
          return deg2rad(minAngle + (d * (i+1) * range));
        })
    },
    [size, ringWidth, ringInset, minAngle, range]
  )
  
  return (
    <g className="gauge-wrapper" transform={toCenter}>

    </g>
  )
}

export default Gauge;