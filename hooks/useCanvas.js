import {useEffect, useRef} from "react";

export default function useCanvas() {


    const canvas = useRef();
    const context = useRef();

    /**
     * FUNCTION DEFINITIONS
     */

    const getCanvasContext = () => {
        if (!canvas.current) {
            return;
        }

        context.current = canvas.current.getContext("2d");
    };

    const resizeCanvasToWindow = () => {
        if (!canvas.current) {
            return;
        }

        canvas.current.width = window.innerWidth;
        canvas.current.height = window.innerHeight;
    };

    /**
     * SIDE-EFFECTS
     */

    useEffect(resizeCanvasToWindow, []);
    useEffect(getCanvasContext, []);

    /**
     * RETURN STATEMENT
     */

    return {
        canvas,
    };
}