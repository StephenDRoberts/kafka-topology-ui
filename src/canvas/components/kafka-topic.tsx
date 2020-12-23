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
    const radius = 30

    const offset1 = Math.sqrt(2) / 2

    return (
        <g>        
            <circle cx={cx} cy={cy} r={radius} fill={"none"} stroke={"black"} stroke-linecap={"butt"}></circle>
            <line x1={cx - radius * offset1} y1={cy - radius * offset1} x2={cx + radius * offset1} y2={cy + radius * offset1} stroke={"black"} ></line>
            <line x1={cx - radius * offset1} y1={cy + radius * offset1} x2={cx + radius * offset1} y2={cy - radius * offset1} stroke={"black"} ></line>
            <text x={cx} y={cy - 15 - radius} text-anchor="middle">Kafka Topic</text>            
        </g>
    )
}

export default KafkaTopic




