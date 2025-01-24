import {useEffect, useState} from "react";

export function useFetch(url) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [limitData, setLimitData] = useState('')

    const sliceData = (arr, limit) => arr.slice(0, limit)

    function getData(url,) {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Не могу получить данные')
                }
                return res.json()
            })
            .then(data => {
                setIsLoading(false)
                setError(null)
                if (limitData) {
                    setData(sliceData(data, limitData))
                } else {
                    setData(data)
                }
            })
            .catch(err => {
                setIsLoading(false)
                setError(err.message)
            })
    }

    useEffect(() => {
        getData(url)
    }, [limitData]);

    function refetch(params) {
        setLimitData(params.params._limit)
    }

    return {
        data,
        isLoading,
        error,
        refetch
    }
}