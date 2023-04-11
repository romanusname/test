"use client";
//import part from '@part'
import colors from "@config/color.config";
import { v4 as uuidv4 } from 'uuid';
export default function stylesParsing(style, name) {

    /*if((!style.id && !style[0]?.id) && name=='event'){
        style.id = uuidv4()
    }*/
    if(name=='event') {
        if (!Array.isArray(style)) {
            style = [style]
        }
        if(!style[0].id) style[0].id = uuidv4()
    }

    if(style.size) {
        if(Array.isArray(style.size)) {
            if(!style.size[1]) style.size[1] = style.size[0]
            style.width = style.size[0]
            style.height = style.size[1]
        }else style.width = style.height = style.size
        delete style.size
    }

    if(style.scale){  // может перетирать трансформы
        if(typeof style.scale == 'number') {
            style.transform = `scale(${style.scale})`
        }
        if(Array.isArray(style.scale)){
            style.transform = `scale(${style.scale[0]},${style.scale[1]})`
        }
        delete style.scale
    }

    if(style.zoom) {
        if(typeof style.width == 'number') style.width = style.width * style.zoom
        if(typeof style.height == 'number') style.height = style.height * style.zoom

        if(typeof style.width == 'string') style.width = (style.width.replace(/[^\d;]/g, '') * style.zoom) + style.width.replace(/[0-9]/g, '').replace(/[\s.,]/g, '')
        if(typeof style.height == 'string') style.height = (style.height.replace(/[^\d;]/g, '') * style.zoom) + style.height.replace(/[0-9]/g, '').replace(/[\s.,]/g, '')

        delete style.zoom
    }

    if(style.paddingX){
        style.paddingLeft = style.paddingX
        style.paddingRight = style.paddingX
        delete style.paddingX
    }

    if(style.paddingY){
        style.paddingTop = style.paddingY
        style.paddingBottom = style.paddingY
        delete style.paddingY
    }

    if(style.bg) {
        if(typeof style.bg == 'string') {
            style.background = style.bg
        }
        if(style.bg.src) {
            style.backgroundImage = `url("${style.bg.src.src ?? style.bg.src}")`
            style.backgroundRepeat = 'no-repeat'
            style.backgroundSize = 'cover'
            style.backgroundPosition = 'center'
        }
        delete style.bg
    }

    if(style.br) {
        style.borderRadius = style.br
        delete style.br
    }

    if(style.bb) {
       if(style.bb[0]) style.background = style.bb[0]
       if(style.bb[1]) style.borderRadius = style.bb[1]
        if(!Array.isArray(style.bb)) style.background = style.bb
        delete style.bb
    }

/*   // if(style.bgImage && name!='image'){
    if(style.bgImage){
       // style.backgroundImage = `url("${style.src.src ?? style.src}")`
        style.backgroundImage = `url("${style.bgImage.src ?? style.src}")`
        style.backgroundRepeat = 'no-repeat'
        style.backgroundSize = 'cover'
        style.backgroundPosition = 'center'
        delete style.bgImage
    }
    //delete style.src*/

    if(style.shadow) {
        let horizontal = style.shadow.horizontal ?? style.shadow.h ?? '0px'
        let vertical = style.shadow.vertical ?? style.shadow.v ?? '0px'
        let blur = style.shadow.blur ?? '15px'
        let size = style.shadow.size ?? '0px'
        let opacity = style.shadow.opacity ?? '0.3'

        style.boxShadow = `${horizontal} ${vertical} ${blur} ${size} rgba(34, 60, 80, ${opacity})`
        delete style.shadow
    }

    if(style.gridColumns) {
        style.gridTemplateColumns = style.gridColumns
        delete style.gridColumns
    }

    if(style.gridRows) {
        style.gridTemplateRows = style.gridRows
        delete style.gridRows
    }

    if(style.gridArea) {
        style.gridTemplateAreas = style.gridArea
        delete style.gridArea
    }

    if(style.gridArea == 2){
        style.gridTemplateAreas = "'top''bottom'"
        delete style.gridArea
    }

    if(style.gridArea == 3){
        style.gridTemplateAreas = "'top''middle''bottom'"
        delete style.gridArea
    }
    //delete style.gridArea

   // if(name!='header') {
    if(style.area) {
        style.gridArea = style.area
        delete style.area
    }
  //  }

    if(style.side){
        if(style.side == 'top') style.top = 0
        if(style.side == 'bottom') style.bottom = 0
        delete style.side
    }

    if(style.reflect){          // в теории может перетирать другие transform
        if(style.reflect=='vertical') style.transform = 'scale(1, -1)'
        if(style.reflect=='horizontal') style.transform = 'scale(-1, 1)'
        delete style.reflect
    }


    if(colors[style.background]) style.background = colors[style.background]
    if(colors[style.color]) style.color = colors[style.color]
    if(colors[style.fill]) style.fill = colors[style.fill]


    return style
}