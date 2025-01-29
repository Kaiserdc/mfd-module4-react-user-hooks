import {Link} from "react-router";
import {useWindowScroll} from "../hooks/useWindowScroll.ts";


export function UseWindowScroll() {
    const [scroll, scrollTo] = useWindowScroll();

    return <>
        <h1>Домашнее задание 5</h1>
        <h3>Реализуйте хук useWindowScroll()</h3>
        <nav>
            <Link className={'btn'} to={'/'}>Вернуться</Link>
        </nav>
        <div className={'use-fetch content'}>
            <p>
                Scroll position x: {scroll.x}, y: {scroll.y}
            </p>
            <button onClick={() => scrollTo({y: 0})}>Scroll to top</button>
        </div>
    </>

}