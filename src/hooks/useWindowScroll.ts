import {useState} from 'react';
import {useWindowEvent} from "./useWindowEvents.ts";

interface IScrollPos {
    x: number | null,
    y: number | null,
}
type IScrollTo = ({x,y}: { x?: number, y?: number }) => void

export const useWindowScroll = (): [IScrollPos, IScrollTo] => {
    const [scroll, setScroll] = useState({x: window.scrollX, y: window.scrollY})

    useWindowEvent('scroll', () => {
        setScroll({x: window.scrollX, y: window.scrollY});
    });

    const scrollTo: IScrollTo = ({x = scroll.x, y = scroll.y}) => {
        window.scrollTo(x, y);
    }

    return [scroll, scrollTo]
}
