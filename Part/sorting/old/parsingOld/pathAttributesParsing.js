export default function pathAttributesParsing(style){
    let pathAttributes = {}

    if(style.d) {
        pathAttributes.d = style.d
        delete style.d
    }

    if(style.fill){
        pathAttributes.fill = style.fill
        delete style.fill
    }
    if(style.fillOpacity){
        pathAttributes.fillOpacity = style.fillOpacity
        delete style.fillOpacity
    }
    if(style.stroke){
        pathAttributes.stroke = style.stroke
        delete style.stroke
    }

    if(style.strokeOpacity){
        pathAttributes.strokeOpacity = style.strokeOpacity
        delete style.strokeOpacity
    }

    if(style.strokeWidth){
        pathAttributes.strokeWidth = style.strokeWidth
        delete style.strokeWidth
    }

    if(style.strokeLinecap){
        pathAttributes.strokeLinecap = style.strokeLinecap
        delete style.strokeLinecap
    }

    if(style.strokeDasharray){
        pathAttributes.strokeDasharray = style.strokeDasharray
        delete style.strokeDasharray
    }
    return pathAttributes
}