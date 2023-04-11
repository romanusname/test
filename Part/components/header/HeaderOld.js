import styles from './Header.module.scss'
import React from "react";
export default function Header({children,long='75px',area='top'}){
    let width
    let height
    let bottom
    let right
    let direction
    let flexDirection

    if(area=='top'){
        width='100vw'
        height = long
        direction = 'horizontal'
        flexDirection = 'row'
    }

    if(area=='bottom'){
        width='100vw'
        height = long
        bottom = 0
        direction = 'horizontal'
        flexDirection = 'row'
    }

    if(area=='left'){
        width=long
        height = '100vh'
        direction = 'vertical'
        flexDirection = 'column'
    }

    if(area=='right'){
        width=long
        height = '100vh'
        right = 0
        direction = 'vertical'
        flexDirection = 'column'
    }


    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {direction})
        }
        return child;
    });

    return(
        <header style={{flexDirection,width,height,bottom,right}} className={styles.Header}>
            {childrenWithProps}
        </header>
    )
}