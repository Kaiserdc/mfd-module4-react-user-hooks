import {Link} from "react-router";
import {useHover} from "../hooks/useHover.ts";

export function UseHover() {
    const { hovered, ref } = useHover<HTMLDivElement>();
    return <>
        <h1>Домашнее задание 3</h1>
        <h3>Реализуйте хук useHover()</h3>
        <nav>
            <Link className={'btn'} to={'/'}>Вернуться</Link>
        </nav>
        <div className={'use-hover content'}>
            <div ref={ref}>
                {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
            </div>
        </div>
    </>
}