import styles from './Group.module.scss'
import React from "react";
export default function Group({children,className, area,marginTop, marginBottom, marginLeft, marginRight, fat, long, size, placeItems, background}){

    let [width,height] = [fat,long]

    if(size) width = height = size
   // if(!width) width = height
  //  if(!height) height = width

    let position
    if(width||height) {
        position = 'absolute'
        if(!placeItems) placeItems = 'center'
    }


    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {position})
        }
        return child;
    });



    return(
        <div style={{placeItems, gridArea:area, marginTop, marginBottom, marginLeft, marginRight,width,height,background}} className={`${styles.Group} ${className}`}>
            {childrenWithProps}
        </div>
    )
}