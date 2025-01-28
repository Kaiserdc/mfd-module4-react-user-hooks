import {useEffect, useState} from "react";
interface IViewPort {
    width:number,
    height:number
}
export function useViewportSize():IViewPort {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
     window.onresize = () => {
         setWidth(window.innerWidth);
         setHeight(window.innerHeight);
     }
    })

    return {width, height}
}