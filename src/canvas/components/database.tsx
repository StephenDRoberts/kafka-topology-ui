import { createExternalModuleReference, createYield } from "typescript"

interface DatabaseProp { 
    props: DatabaseProps
}

interface DatabaseProps { 
    x: number,
    y: number,
    // width: number,
    // height: number
}
const Database = (props: DatabaseProp) => { 
    const { x, y } = props.props
    

    const radius =30

    const offset = Math.sqrt(2) / 2

    return (
        <g>        
            <rect x={x} y={y} height={70} width={80} fill={"none"} stroke={"black"} stroke-linecap={"butt"}></rect>
            <ellipse cx={x + 40} cy={y} rx={40} ry={10} fill={"white"} stroke={"black"}></ellipse>
            <ellipse cx={x + 40} cy={y + 70} rx={40} ry={10} fill={"white"} stroke={"black"}></ellipse>
            <text x={x} y={y - 10-15}>State Store</text>            
        </g>
    )
}

export default Database




