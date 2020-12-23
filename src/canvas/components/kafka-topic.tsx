import { createExternalModuleReference, createYield } from "typescript"

interface KafkaTopicProp { 
    props: KafkaTopicProps
}

interface KafkaTopicProps { 
    cx: number,
    cy: number,
    // width: number,
    // height: number
}
const KafkaTopic = (props: KafkaTopicProp) => { 
    const { cx, cy } = props.props
    const circlePositioningAdj = (50/2)
    const radius =30

    const offset = Math.sqrt(2) / 2

    return (
        <g>        
            <circle cx={cx} cy={cy + circlePositioningAdj} r={radius} fill={"none"} stroke={"black"} stroke-linecap={"butt"}></circle>
            <line x1={cx - radius * offset} y1={cy +circlePositioningAdj- radius * offset} x2={cx + radius * offset} y2={cy +circlePositioningAdj+ radius * offset} stroke={"black"} ></line>
            <line x1={cx - radius * offset} y1={cy + circlePositioningAdj+radius * offset} x2={cx + radius * offset} y2={cy +circlePositioningAdj- radius * offset} stroke={"black"} ></line>
            <text x={cx} y={cy - 15} text-anchor="middle">Kafka Topic</text>            
        </g>
    )
}

export default KafkaTopic




