import React from 'react';
import './App.css';
import ClassApplication from './canvas/components/class-application';
import KafkaTopic from './canvas/components/kafka-topic';
import OneWayArrow from './canvas/arrows/oneWayArrow';
import Store from './canvas/components/store';
import { useGetTopology } from './hooks/use-queries';

const HEIGHT = 80
const WIDTH = 120
const RADIUS = 30

const YLEVEL1 = 100
const YLEVEL2 = 300

const XLEVEL1 = 50
const XLEVEL2 = 250
const XLEVEL3 = 500
const XLEVEL4 = 750

function App() {
  const topology = useGetTopology()
  console.log("TOPOLOGY:", topology)

  return (
    <div className="App">
      <svg height={"100vh"} width={"100vw"} >
        <ClassApplication x={XLEVEL1} y={YLEVEL1} />
        <ClassApplication x={XLEVEL1} y={YLEVEL2} />
        <OneWayArrow x1={XLEVEL1 + WIDTH} y1={YLEVEL1+(HEIGHT/2)} x2={XLEVEL2} y2={YLEVEL1+(HEIGHT/2)} />
        <OneWayArrow x1={XLEVEL1 + WIDTH} y1={YLEVEL2+(HEIGHT/2)} x2={XLEVEL2} y2={YLEVEL1+(HEIGHT/2)} />
        <KafkaTopic cx={XLEVEL2+RADIUS} cy={YLEVEL1+(HEIGHT/2)}/>
        <Store x={XLEVEL4} y={YLEVEL1}/>
      </svg>
    </div>
  );
}

export default App;
