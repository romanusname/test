import stylesParsing from "./stylesParsing";

export default function eventsParsing(style) {
    let events = {}
    let eventsTemplate = {}



  //  eventsTemplate.click = style.click
  //  delete style.click

    if(style.speed) {
        events = {...events, 'data-speed': style.speed}
        delete style.speed
    }

    if(style.lag) {
        events = {...events, 'data-lag': style.lag}
        delete style.lag
    }

    if(style.type) {
        events.type = style.type
        delete style.type
    }

    if(style.placeholder) {
        events.placeholder = style.placeholder
        delete style.placeholder
    }

 //   eventsTemplate.hover = style.hover
   // delete style.hover

    if(style.onHover){
        if(typeof style.onHover == 'function'){
          //  events.onHover = style.onHover
        }
        if(typeof style.onHover == 'object'){
            eventsTemplate.onHover = stylesParsing(style.onHover,'event')
        }
        if(typeof style.onHover == 'string'){

        }
        delete style.onHover
    }



    if(style.onHoverYoyo){
        if(typeof style.onHoverYoyo == 'function'){
            //  events.onHover = style.onHover
        }
        if(typeof style.onHoverYoyo == 'object'){
            eventsTemplate.onHoverYoyo = stylesParsing(style.onHoverYoyo,'event')
        }
        if(typeof style.onHoverYoyo == 'string'){

        }
        delete style.onHoverYoyo
    }


    if(style.onFocus){
        if(typeof style.onFocus == 'function'){
           // events.onFocus = style.onFocus
        }
        if(typeof style.onFocus == 'object'){
            eventsTemplate.onFocus = stylesParsing(style.onFocus)
        }
        if(typeof style.onFocus == 'string'){

        }
        delete style.onFocus
    }


    if(style.onBlur){
        if(typeof style.onFocus == 'function'){
            events.onBlur = style.onBlur
        }
        if(typeof style.onFocus == 'object'){
          //  eventsTemplate.onFocus = style.onFocus
        }
        if(typeof style.onFocus == 'string'){

        }
        delete style.onFocus
    }


    eventsTemplate.onScroll = style.onScroll
    delete style.onScroll

    eventsTemplate.scrollToUp = style.scrollToUp
    delete style.scrollToUp

    eventsTemplate.scrollToDown = style.scrollToDown
    delete style.scrollToDown

    eventsTemplate.scrollMove = style.scrollMove
    delete style.scrollMove

    eventsTemplate.pressure = style.pressure
    delete style.pressure

    eventsTemplate.onStart = style.onStart
    delete style.onStart

    eventsTemplate.pin = style.pin
    delete style.pin


    if(style.onClick){
        if(typeof style.onClick == 'function'){
            events.onClick = style.onClick
        }
        if(typeof style.onClick == 'object'){
            eventsTemplate.onClick = stylesParsing(style.onClick)
        }
        if(typeof style.onClick == 'string'){

        }
        delete style.onClick
    }


    if(style.onRepeat){
        if(typeof style.onRepeat == 'function'){
            events.onRepeat = style.onClick
        }
        if(typeof style.onRepeat == 'object'){
            eventsTemplate.onRepeat = stylesParsing(style.onRepeat)
        }
        if(typeof style.onRepeat == 'string'){

        }
        delete style.onRepeat
    }


    if(style.onYoyo){
        if(typeof style.onYoyo == 'function'){
            events.onYoyo = style.onClick
        }
        if(typeof style.onYoyo == 'object' || Array.isArray(style.onYoyo)){
            eventsTemplate.onYoyo = stylesParsing(style.onYoyo)
        }
        if(typeof style.onYoyo == 'string'){

        }
        delete style.onYoyo
    }

    events.onMouseEnter = style.onMouseEnter
    delete style.onMouseEnter

    events.onMouseLeave = style.onMouseLeave
    delete style.onMouseLeave

    events.onMouseMove = style.onMouseMove
    delete style.onMouseMove

/*    if(style.id){
        events.id = style.id
        delete style.id
    }*/

   // events = styleTemplates(events, 'event')
  //  eventsTemplate = styleTemplates(eventsTemplate,'event')



    return {events,eventsTemplate}
}