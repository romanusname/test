export default function transform(props) {

    if(!props.transform && (props.x || props.y ||props.z || props.rotateX || props.rotateY || props.rotateZ || props.scale || props.scaleX || props.scaleY || props.scaleZ || props.skewX || props.skewY || props.skewZ)){
        props.transform = ' '
    }

    if(props.x){
        if(typeof props.x == 'number') props.x = props.x+'px'
        props.transform = props.transform+` translateX(${props.x})`
        delete props.x
    }

    if(props.y){
        if(typeof props.y == 'number') props.y = props.y+'px'
        props.transform = props.transform+` translateY(${props.y})`
        delete props.y
    }

    if(props.z){
        if(typeof props.z == 'number') props.z = props.z+'px'
        props.transform = props.transform+` translateZ(${props.z})`
        delete props.z
    }

    if(props.rotateX){
        if(typeof props.rotateX == 'number') props.rotateX = props.rotateX+'deg'
        props.transform = props.transform+` rotateX(${props.rotateX})`
        delete props.rotateX
    }

    if(props.rotateY){
        if(typeof props.rotateY == 'number') props.rotateY = props.rotateY+'deg'
        props.transform = props.transform+` rotateY(${props.rotateY})`
        delete props.rotateY
    }

    if(props.rotateZ){
        if(typeof props.rotateZ == 'number') props.rotateZ = props.rotateZ+'deg'
        props.transform = props.transform+` rotateZ(${props.rotateZ})`
        delete props.rotateZ
    }


    if(props.scale){
        props.transform = props.transform+` scale(${props.scale})`
        delete props.scale
    }

    if(props.scaleX){
        props.transform = props.transform+` scaleX(${props.scaleX})`
        delete props.scaleX
    }

    if(props.scaleY){
        props.transform = props.transform+` scaleY(${props.scaleY})`
        delete props.scaleY
    }

    if(props.scaleZ){
        props.transform = props.transform+` scaleZ(${props.scaleZ})`
        delete props.scaleZ
    }


    if(props.skewX){
        if(typeof props.skewX == 'number') props.skewX = props.skewX+'deg'
        props.transform = props.transform+` skewX(${props.skewX})`
        delete props.skewX
    }

    if(props.skewY){
        if(typeof props.skewY == 'number') props.skewY = props.skewY+'deg'
        props.transform = props.transform+` skewY(${props.skewY})`
        delete props.skewY
    }

    if(props.skewZ){
        if(typeof props.skewZ == 'number') props.skewZ = props.skewZ+'deg'
        props.transform = props.transform+` skewZ(${props.skewZ})`
        delete props.skewZ
    }
}