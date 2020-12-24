import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import * as d3 from 'd3';
import './App.css';
import ClassApplication from './canvas/components/class-application';
import KafkaTopic from './canvas/components/kafka-topic';
import OneWayArrow from './canvas/Arrows/oneWayArrow';
import Database from './canvas/components/database';

const DATA = [1]

// const createD3Element = (ref: { current: any; }) => {
//   const h = "100vh";
//   const w = "100vw";

//   const svg = d3.select(ref.current)
//                 .append("svg")
//                 .attr("width", w)
//                 .attr("height", h)
                
  
//   svg.selectAll('rect')
//     .data(DATA)
//     .enter()
//     .append('rect')
//     .attr("width", 25)
//     .attr("height", (d) => 30 * d)
//     .attr('y', 50)
//     .attr('fill', 'navy')

// }

function App() {

  // const myRef = useRef(null)

  // useEffect(() => { 
  //   createD3Element(myRef)
  // },[])

  const HEIGHT = 80
  const WIDTH = 120
  const RADIUS = 30

  const props1 = {
    x: 50,
    y: 100,
    fill: "navy"
  }

  const arrow1Props = {
    x1: 50 + WIDTH,
    y1: 100 + (HEIGHT / 2),
    x2: 250,
    y2: 100 + (HEIGHT / 2)
  }

  const props2 = {
    x: 250,
    y: 100,
    fill: "pink"
  }

  const arrow2Props = {
    x1: 250 + WIDTH,
    y1: 100 + (HEIGHT / 2),
    x2: 500 - RADIUS,
    y2: 100 + (HEIGHT / 2)
  }

  const kafkaTopicProps = {
    cx: 500,
    cy: 100 + HEIGHT / 2 
  }

  const databaseProps = {
    x: 750,
    y: 100
  }



  return (
    <div className="App">
      
      {/* <div ref={ myRef }></div> */}
      <svg height={"100vh"} width={"100vw"} >
        <ClassApplication props={props1} />
        <ClassApplication props={props2} />
        <OneWayArrow props={arrow1Props} />
        <OneWayArrow props={arrow2Props} />
        <KafkaTopic props={kafkaTopicProps}/>
        <Database props={databaseProps}/>
      </svg>
    </div>
  );
}

export default App;
