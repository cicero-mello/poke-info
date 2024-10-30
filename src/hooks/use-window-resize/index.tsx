import { useLayoutEffect, useState } from "preact/hooks"
import { WindowDimensions } from "./types"
import { debounce } from "@utils"

export const useWindowResize = (): WindowDimensions => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useLayoutEffect(() =>{
        const onResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        onResize()
        const debouncedResize = debounce(onResize, 200)

        window.addEventListener("resize", debouncedResize)

        return () => {
            window.removeEventListener("resize", debouncedResize)
        }
    }, [])

    return windowDimensions
}
