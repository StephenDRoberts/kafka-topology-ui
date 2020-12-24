interface OneWayArrowProps { 
    x1: number,
    y1: number,
    x2: number,
    y2: number,
}
const OneWayArrow = (props: OneWayArrowProps) => { 
    const { x1, y1, x2, y2 } = props
 
    const offset = 5 * Math.sqrt(2) / 2

    return (
        <g>        
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={"black"} ></line>
            <line x1={x2 - offset} y1={y2 - offset} x2={x2} y2={y2} stroke={"black"} ></line>
            <line x1={x2 - offset} y1={y2 + offset} x2={x2} y2={y2} stroke={"black"} ></line>
        </g>
    )
}

export default OneWayArrow




