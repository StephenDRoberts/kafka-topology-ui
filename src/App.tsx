import React from 'react';
import './App.css';
import ClassApplication from './canvas/components/class-application';
import KafkaTopic from './canvas/components/kafka-topic';
import OneWayArrow from './canvas/Arrows/oneWayArrow';
import Store from './canvas/components/database';

function App() {
  const HEIGHT = 80
  const WIDTH = 120
  const RADIUS = 30

  const YLEVEL1 = 100
  
  const XLEVEL1 = 50
  const XLEVEL2 = 250
  const XLEVEL3 = 500
  const XLEVEL4 = 750

  return (
    <div className="App">
      <svg height={"100vh"} width={"100vw"} >
        <ClassApplication x={XLEVEL1} y={YLEVEL1} />
        <ClassApplication x={XLEVEL2} y={YLEVEL1} />
        <OneWayArrow x1={XLEVEL1 + WIDTH} y1={YLEVEL1+(HEIGHT/2)} x2={XLEVEL2} y2={YLEVEL1+(HEIGHT/2)} />
        <OneWayArrow x1={XLEVEL2 + WIDTH} y1={YLEVEL1+(HEIGHT/2)} x2={XLEVEL3 - RADIUS} y2={YLEVEL1+(HEIGHT/2)} />
        <KafkaTopic cx={XLEVEL3} cy={YLEVEL1+(HEIGHT/2)}/>
        <Store x={XLEVEL4} y={YLEVEL1}/>
      </svg>
    </div>
  );
}

export default App;
