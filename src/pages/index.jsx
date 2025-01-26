import {NavLink} from "react-router";

export function Index() {
    return (
        <>
            <h1>Главная</h1>
            <nav>
                <NavLink className={'btn'} to="/home-work-1" end>Домашнее задание 1</NavLink>
                <NavLink className={'btn'} to="/home-work-1" end>Домашнее задание 2</NavLink>
            </nav>
        </>
    )
}