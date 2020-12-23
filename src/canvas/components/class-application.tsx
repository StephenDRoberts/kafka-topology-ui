
interface ClassApplicationProp { 
    props: ClassApplicationProps
}

interface ClassApplicationProps { 
    x: number,
    y: number,
    fill: string,
    // width: number,
    // height: number
}
const ClassApplication = (props: ClassApplicationProp) => { 
    const { x, y, fill } = props.props

    return (
        <g>        
            <rect x={x} y={y} fill={"white"} width={120} height={80} stroke={"black"} stroke-linecap={"butt"}></rect>
            <text x={x} y={y - 15} >Class Application</text>            
        </g>
    )
}

export default ClassApplication