interface StoreProps { 
    x: number,
    y: number
}
const Store = (props: StoreProps) => { 
    const { x, y } = props
    
    return (
        <g>        
            <rect x={x} y={y} height={70} width={80} fill={"none"} stroke={"black"} strokeLinecap={"butt"}></rect>
            <ellipse cx={x + 40} cy={y} rx={40} ry={10} fill={"white"} stroke={"black"}></ellipse>
            <ellipse cx={x + 40} cy={y + 70} rx={40} ry={10} fill={"white"} stroke={"black"}></ellipse>
            <text x={x} y={y - 10-15}>State Store</text>            
        </g>
    )
}

export default Store




