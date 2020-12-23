import * as d3 from 'd3';

const Canvas = (ref: any) => { 
    const h = "100vh";
    const w = "100vw";
    
    const svg = d3.select(ref.current)
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h)
    
    return svg
}

export default Canvas;