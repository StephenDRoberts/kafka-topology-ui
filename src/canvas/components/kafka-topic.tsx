
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

    return (
        <g x={cx} y={ cy}>        
          
            <circle cx={cx} cy={cy} r={30} fill={"white"} stroke={"black"} stroke-linecap={"butt"}></circle>
            <text x={cx} y={cy - 15} >Kafka Topic</text>            
        </g>
    )
}

export default KafkaTopic