interface ClassApplicationProps { 
    x: number,
    y: number
}
const ClassApplication = (props: ClassApplicationProps) => { 
    const { x, y } = props

    return (
        <g>        
            <rect x={x} y={y} fill={"white"} width={120} height={80} stroke={"black"} strokeLinecap={"butt"}></rect>
            <text x={x} y={y - 15} >Class Application</text>            
        </g>
    )
}

export default ClassApplication