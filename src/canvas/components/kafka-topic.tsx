interface KafkaTopicProps { 
    cx: number,
    cy: number
}
const KafkaTopic = (props: KafkaTopicProps) => { 
    const { cx, cy } = props

    const radius =30

    const offset = Math.sqrt(2) / 2

    return (
        <g>        
            <circle cx={cx} cy={cy} r={radius} fill={"none"} stroke={"black"} stroke-linecap={"butt"}></circle>
            <line x1={cx - radius * offset} y1={cy - radius * offset} x2={cx + radius * offset} y2={cy + radius * offset} stroke={"black"} ></line>
            <line x1={cx - radius * offset} y1={cy +radius * offset} x2={cx + radius * offset} y2={cy - radius * offset} stroke={"black"} ></line>
            <text x={cx} y={cy - radius - 15} text-anchor="middle">Kafka Topic</text>            
        </g>
    )
}

export default KafkaTopic




