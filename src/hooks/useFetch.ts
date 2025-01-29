import {useEffect, useState} from "react";

export function useFetch<T>(url: string, options: {} = {}) {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState<Boolean>(true)
    const [error, setError] = useState(null)

    const getData = (opt: {} = options) => {
        fetch(url)
            .then(res => {
                console.log(opt)
                if (!res.ok) {
                    throw Error('Не могу получить данные')
                }
                return res.json()
            })
            .then(data => {
                setIsLoading(false)
                setError(null)
                setData(data)
            })
            .catch(err => {
                setIsLoading(false)
                setError(err.message)
            })
    }

    useEffect(() => {
        getData(url)
    }, []);

    return {
        data,
        isLoading,
        error,
        refetch: getData
    }
}