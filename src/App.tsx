import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import * as d3 from 'd3';
import './App.css';
import ClassApplication from './canvas/components/class-application';
import KafkaTopic from './canvas/components/kafka-topic';

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

  const props1 = {
    x: 50,
    y: 50,
    fill: "navy"
  }


  const props2 = {
    x: 250,
    y: 100,
    fill: "pink"
  }

  const kafkaTopicProps = {
    cx: 500,
    cy: 100
  }

  return (
    <div className="App">
      
      {/* <div ref={ myRef }></div> */}
      <svg height={"100vh"} width={"100vw"} >
        <ClassApplication props={props1} />
        <ClassApplication props={props2}/>
        <KafkaTopic props={kafkaTopicProps}/>
      </svg>
    </div>
  );
}

export default App;
