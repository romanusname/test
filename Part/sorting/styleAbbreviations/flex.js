export default function flex(props) {
    if(props.jc){
        props.justifyContent = props.jc
        delete props.jc
    }

    if(props.center){
        props.justifyContent = 'center'
        delete props.center
    }
    if(props.around){
        props.justifyContent = 'space-around'
        delete props.around
    }
    if(props.between){
        props.justifyContent = 'space-between'
        delete props.between
    }
    if(props.evenly){
        props.justifyContent = 'space-evenly'
        delete props.evenly
    }

    if(props.justifyContent){
        if(props.justifyContent == 'sa') props.justifyContent = 'space-around'
        if(props.justifyContent == 'sb') props.justifyContent = 'space-between'
        if(props.justifyContent == 'se') props.justifyContent = 'space-evenly'
    }


    if(props.vertical){
        props.flexDirection = 'column'
        delete props.vertical
    }

    if(props.horizontal){
        props.flexDirection = 'row'
        delete props.horizontal
    }

    if(props.direction){
        props.flexDirection = props.direction
        delete props.direction
    }

    if(props.flexDirection=='vertical' || props.flexDirection=='v'){
        props.flexDirection = 'column'
    }

    if(props.flexDirection=='horizontal' || props.flexDirection=='h'){
        props.flexDirection = 'row'
    }

  //  return props
}