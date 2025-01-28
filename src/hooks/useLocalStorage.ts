import {useState} from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
    value: LocalStorageReturnValue,
    {
        setItem: (value: LocalStorageSetValue) => void;
        removeItem: () => void;
    },
];

function getLocalStorageValue(key: string) {
    const value = localStorage.getItem(key);
    return value ? value : null;
}

export function useLocalStorage(key: string): UseLocalStorage {
    const [value, setValue] = useState(() => getLocalStorageValue(key));

    function setItem(value: LocalStorageSetValue) {
        localStorage.setItem(key, JSON.stringify(value))
        setValue(value)
    }
    function removeItem() {
        localStorage.removeItem(key);
        setValue(null)
    }

    return [
        value,
        {
            setItem,
            removeItem
        }];
}