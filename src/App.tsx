import React from 'react';
import './App.css';
import Gauge from './gauge/Gauge';
import SvgWrapper from './svg/SvgWrapper';
import { GaugeProps } from './gauge/Gauge'

const props = {
  width: 500,
  height: 300,
}

const gaugeProps: GaugeProps = {

}

function App() {
  return (
    <div className="App">
      <SvgWrapper {...props}>
        <Gauge {...gaugeProps} />
      </SvgWrapper>
    </div>
  );
}

export default App;
