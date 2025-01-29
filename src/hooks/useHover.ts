import {useEffect, useRef, useState} from "react";

export function useHover<T extends HTMLDivElement>() {
    const [hovered, setHover] = useState<boolean>(false)
    const ref = useRef<T | null>(null)

    useEffect(() => {

        ref.current && ref.current.addEventListener("mouseover", () => setHover(true))
        ref.current && ref.current.addEventListener("mouseout", () => setHover(false))

        return()=>{
            ref.current && ref.current.removeEventListener("mouseover", () => setHover(true))
            ref.current && ref.current.removeEventListener("mouseout", () => setHover(false))
        }

    })

    return {hovered, ref}
}