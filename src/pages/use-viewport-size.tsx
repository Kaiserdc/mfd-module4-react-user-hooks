import {useViewportSize} from "../hooks/useViewportSize.ts";
import {Link} from "react-router";


export const UseViewportSize = () => {
    const {height, width} = useViewportSize();

    return (
        <>
            <h1>Домашнее задание 4</h1>
            <h3>Реализуйте хук useViewportSize()</h3>
            <nav>
                <Link className={'btn'} to={'/'}>Вернуться</Link>
            </nav>
            <div className={'use-viewport-size content'}>
                Width: {width}, height: {height}
            </div>
        </>
    );
};