
interface ClassApplicationProp { 
    props: ClassApplicationProps
}

interface ClassApplicationProps { 
    y: number,
    fill: string,
    // width: number,
    // height: number
}
const ClassApplication = (props: ClassApplicationProp) => { 
    const { y, fill } = props.props

    return (
        <rect y={y} fill={fill} width={100} height={50}></rect>
    )
}

export default ClassApplication