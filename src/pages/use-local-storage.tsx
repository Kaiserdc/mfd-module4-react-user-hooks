import {Link} from "react-router";
import {useLocalStorage} from "../hooks/useLocalStorage.ts";

export function UseLocalStoragePage() {
    const [value, {setItem, removeItem}] = useLocalStorage('some-key');

    return <>
        <h1>Домашнее задание 2</h1>
        <h3>Реализуйте хук useLocalStorage()</h3>
        <nav>
            <Link className={'btn'} to={'/'}>Вернуться</Link>
        </nav>
        <div className={'use-local-storage content'}>
            <p>Значение из LocalStorage: <strong>{value ? value : 'Пустое значение'}</strong></p>
            <div style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <button onClick={() => setItem('new storage value')}>Задать значение</button>
                <button onClick={() => removeItem()}>Удалить значение</button>
            </div>
        </div>
    </>

}