import {NavLink} from "react-router";

export function Index() {
    return (
        <>
            <h1>Главная</h1>
            <nav>
                <NavLink className={'btn'} to="/use-fetch" end>Домашнее задание 1</NavLink>
            </nav>
        </>
    )
}