import {Link} from "react-router";
import {useFetch} from "../hooks/useFetch";

export function HomeWork1() {
    const {
        data,
        isLoading,
        error,
        refetch
    } = useFetch('https://jsonplaceholder.typicode.com/posts');

    return <>
        <h1>Домашнее задание 1</h1>
        <h3>Реализуйте хук useFetch()</h3>
        <nav>
        <Link className={'btn'} to={'/'}>Вернуться</Link>
        </nav>
        <div className={'use-fetch content'}>
            <div>
                <button onClick={() => refetch({
                    params: {
                        _limit: 3
                    }
                })}>
                    Перезапросить
                </button>
            </div>
            {isLoading && 'Загрузка...'}
            {error && 'Произошла ошибка'}
            {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
        </div>
    </>
}