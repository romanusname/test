export default function grid(props) {
    if(props.templateColumns){
        props.gridTemplateColumns = props.templateColumns
        delete props.templateColumns
    }

    if(props.templateRows){
        props.gridTemplateRows = props.templateRows
        delete props.templateRows
    }

    if(props.autoColumns){
        props.gridAutoColumns = props.autoColumns
        delete props.autoColumns
    }

    if(props.autoRows){
        props.gridAutoRows = props.autoRows
        delete props.autoRows
    }

    if(props.center){
        props.placeItems = 'center'
        delete props.center
    }

    if(props.vertical){
        props.gridAutoFlow='row'
        delete props.vertical
    }

    if(props.horizontal){
        props.gridAutoFlow='column'
        delete props.horizontal
    }

    if(props.direction){
        props.gridAutoFlow = props.direction
        delete props.direction
    }

    if(props.gridAutoFlow=='vertical'||props.gridAutoFlow=='v'){
        props.gridAutoFlow='row'
    }

    if(props.gridAutoFlow=='horizontal'||props.gridAutoFlow=='h'){
        props.gridAutoFlow='column'
    }

    if(props.areas){
        props.gridTemplateAreas = props.areas
        delete props.areas
    }


    if(props.gridAutoFlow=='column'&&props.gridTemplateAreas){
        if(props.gridTemplateAreas==1){
            props.gridTemplateAreas= `"middle"`
        }

        if(props.gridTemplateAreas==2){
            props.gridTemplateAreas= `"left right"`
        }

        if(props.gridTemplateAreas==3){
            props.gridTemplateAreas= `"left middle right"`
        }

        if(props.gridTemplateAreas==4){
            props.gridTemplateAreas= `"left middleLeft middleRight right"`
        }

        if(props.gridTemplateAreas==5){
            props.gridTemplateAreas= `"left middleLeft middle middleRight right"`
        }
    }


    if(props.gridTemplateAreas==1){
        props.gridTemplateAreas= `"middle"`
    }

    if(props.gridTemplateAreas==2){
        props.gridTemplateAreas= `"top" "bottom"`
    }

    if(props.gridTemplateAreas==3){
        props.gridTemplateAreas= `"top" "middle" "bottom"`
    }

    if(props.gridTemplateAreas==4){
        props.gridTemplateAreas= `"top" "middleUp" "middleDown" "bottom"`
    }

    if(props.gridTemplateAreas==5){
        props.gridTemplateAreas= `"top" "middleUp" "middle" "middleDown" "bottom"`
    }




}