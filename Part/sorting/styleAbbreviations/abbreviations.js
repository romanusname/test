"use client";
import colors from "@config/color.config";
import flex from './flex'
import grid from './grid'
import event from "./event";
import transform from "./transform";
export default function Abbreviations(props, name) {

    if(name=='flex' || name=='form' || props.display=='flex') flex(props)
    if(name=='grid' || name=='modal' || name=='section' || props.display=='grid') grid(props)
    if(name=='event') event(props)

    if(name!='event') transform(props)


    if(props.w){
        props.width=props.w
        delete props.w
    }

    if(props.h){
        props.height=props.h
        delete props.h
    }

    if(props.maxW){
        props.maxWidth=props.maxW
        delete props.maxW
    }

    if(props.minW){
        props.minWidth=props.minW
        delete props.minW
    }

    if(props.maxH){
        props.maxHeight=props.maxH
        delete props.maxH
    }

    if(props.minH){
        props.minHeight=props.minH
        delete props.minH
    }


    if(props.pos){
        props.position = props.pos
        delete props.pos
    }

    if(props.position=='a') props.position = 'absolute'
    if(props.position=='r') props.position = 'relative'


    if(props.paddingX){
        props.paddingLeft = props.paddingX
        props.paddingRight = props.paddingX
        delete props.paddingX
    }

    if(props.paddingY){
        props.paddingTop = props.paddingY
        props.paddingBottom = props.paddingY
        delete props.paddingY
    }

    if(props.bg) {
        if(typeof props.bg == 'string') {
            props.background = props.bg
        }
        if(props.bg.src) {
            props.backgroundImage = `url("${props.bg.src.src ?? props.bg.src}")`
            props.backgroundRepeat = 'no-repeat'
            props.backgroundSize = 'cover'
            props.backgroundPosition = 'center'
        }
        delete props.bg
    }

    if(props.br) {
        props.borderRadius = props.br
        delete props.br
    }

    if(props.brLeft) {
        if(typeof props.brLeft == 'number') props.brLeft = props.brLeft + 'px'
        props.borderTopLeftRadius = props.brLeft
        props.borderBottomLeftRadius = props.brLeft
        delete props.brLeft
    }

    if(props.brRight) {
        if(typeof props.brRight == 'number') props.brRight = props.brRight + 'px'
        props.borderTopRightRadius = props.brRight
        props.borderBottomRightRadius = props.brRight
        delete props.brRight
    }

    if(props.brTop) {
        if(typeof props.brTop == 'number') props.brTop = props.brTop + 'px'
        props.borderTopLeftRadius = props.brTop
        props.borderTopRightRadius = props.brTop
        delete props.brTop
    }

    if(props.brBottom) {
        if(typeof props.brBottom == 'number') props.brBottom = props.brBottom + 'px'
        props.borderBottomLeftRadius = props.brBottom
        props.borderBottomRightRadius = props.brBottom
        delete props.brBottom
    }



    if(props.area){
        props.gridArea = props.area
    }


    if(props.aItems){
        props.alignItems = props.aItems
        delete props.aItems
    }

    if(props.aSelf){
        props.alignSelf = props.aSelf
        delete props.aSelf
    }

    if(props.jItems){
        props.justifyItems = props.jItems
        delete props.jItems
    }

    if(props.jSelf){
        props.justifySelf = props.jSelf
        delete props.jSelf
    }

    if(props.jc){
        props.justifyContent = props.jc
        delete props.jc
    }


    if(props.size) {
        if(Array.isArray(props.size)) {
            if(!props.size[1]) props.size[1] = props.size[0]
            props.width = props.size[0]
            props.height = props.size[1]
        }else props.width = props.height = props.size
        delete props.size
    }

    if(props.zoom) {
        if(typeof props.width == 'number') props.width = props.width * props.zoom
        if(typeof props.height == 'number') props.height = props.height * props.zoom

        if(typeof props.width == 'string') props.width = (props.width.replace(/[^\d;]/g, '') * props.zoom) + props.width.replace(/[0-9]/g, '').replace(/[\s.,]/g, '')
        if(typeof props.height == 'string') props.height = (props.height.replace(/[^\d;]/g, '') * props.zoom) + props.height.replace(/[0-9]/g, '').replace(/[\s.,]/g, '')

        delete props.zoom
    }

    if(props.widthMax){
        props.width = props.widthMax[0]
        props.maxWidth = props.widthMax[1]
        delete  props.widthMax
    }

    if(props.heightMax){
        props.height = props.heightMax[0]
        props.maxheight = props.heightMax[1]
        delete  props.heightMax
    }



    if(props.shadow) {
        let horizontal = props.shadow.horizontal ?? props.shadow.h ?? '0px'
        let vertical = props.shadow.vertical ?? props.shadow.v ?? '0px'
        let blur = props.shadow.blur ?? '15px'
        let size = props.shadow.size ?? '0px'
        let opacity = props.shadow.opacity ?? '0.3'

        props.boxShadow = `${horizontal} ${vertical} ${blur} ${size} rgba(34, 60, 80, ${opacity})`
        delete props.shadow
    }

    if(colors[props.background]) props.background = colors[props.background]
    if(colors[props.color]) props.color = colors[props.color]
    if(colors[props.fill]) props.fill = colors[props.fill]

    return props
}