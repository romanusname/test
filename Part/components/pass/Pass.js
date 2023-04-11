"use client";
import React from "react";

export default function Pass(props) {

    let children = props.children

    let propsNotChildren = {...props}
    delete propsNotChildren.children


    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {...propsNotChildren,...child.props})
        }
        return child;
    });

    return childrenWithProps

}