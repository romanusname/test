import constructor from "@config/mods/constructor.mod";
import eventsTemplates from '../eventTemplates'
import adaptive from "../adaptive";
import eventsParsing from './eventsParsing'
import stylesParsing from "./stylesParsing";
import pathAttributesParsing from "./pathAttributesParsing";
//import addToGlobalTimeline from "./addToGlobalTimeline";
import part from '@part'
export default function propsParsing({props, ref, name}) {

    let style = {...props}

    let attributes = {}

    if(name) {
        if (constructor.active) style.background = constructor[name]
    }

    if(style.tl) {
        part.globalTimeline.add(ref, style)
       // delete style.tl
    }

        let styleProps = {...style.props}
        delete style.props
        delete styleProps.children
        Object.assign(style, styleProps)


    let children = style.children
    delete style.children

    let className = style.className
    delete style.className

    let show = style.show
    let target = style.target
    let transition = style.transition
    let number = style.number

    let mobile = style.mobile
    if(style.mobile) mobile = stylesParsing(mobile)
    delete style.mobile // пропусить mobile через styleTemplates или propsParsing

    let pass = style.pass ?? {}
    delete style.pass



    //не удаляю эвенты из style. надо бы ег вернуть
    let {events,eventsTemplate} = eventsParsing(style)


    pass.direction = style.direction

    style = stylesParsing(style,name)

    if(ref) {
        eventsTemplates(eventsTemplate, ref,name,style)
        adaptive(mobile,ref)
    }

    let wordmaster
    if(style.wordmaster){
        pass.wordmaster = style.wordmaster
        wordmaster = style.wordmaster
        delete style.wordmaster
    }


  //  let section
    if(style.section>-1){
        pass.section = style.section
      //  section = style.section
        delete style.section
    }

    let pathAttributes = pathAttributesParsing(style)


    attributes = {...events}
    attributes.style = style
    attributes.ref = ref

    delete style.comment

    return {
        style,children,className,pass,events,wordmaster,mobile,pathAttributes,attributes,show,target,transition,number
    }
}