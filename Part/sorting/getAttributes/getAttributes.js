export default function getAttributes({props,ref,events,style}) {
    props.style = style
    props.attributes = {style,...events,ref}
    if(props.id) props.attributes.id = props.id
    if(props.type) props.attributes.type = props.type
    if(props.placeholder) props.attributes.placeholder = props.placeholder
    return props
}