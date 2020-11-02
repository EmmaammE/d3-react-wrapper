import React from 'react';
import './App.css';
import Gauge from './gauge/Gauge';
import SvgWrapper from './svg/SvgWrapper';

const props = {
  width: 500,
  height: 300,
}

function App() {
  return (
    <div className="App">
      <SvgWrapper {...props}>
        <Gauge />
      </SvgWrapper>
    </div>
  );
}

export default App;
