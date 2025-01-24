import {Link} from "react-router";

export function HomeWork1() {
    return <>
        <h1>Домашнее задание 1</h1>
        <h3>Реализуйте хук useFetch()</h3>
        <nav>
        <Link className={'btn'} to={'/'}>Вернуться</Link>
        </nav>
    </>
}