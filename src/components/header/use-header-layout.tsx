import { useLayoutEffect, useState } from "preact/hooks"
import { debounce } from "@utils"

const maxWindowWidthToFitNav = 624
const maxWindowWidthToFitNavinRem = maxWindowWidthToFitNav / 16

/**
 *  Returns a state to know if the header layout need to be
 *  in mobile mode.
 * @returns obj.isMobile
 */
export const useHeaderLayout = () => {
    const [isMobile, setIsMobile] = useState(false)

    useLayoutEffect(() => {
        const onResize = () => {
            console.log(window.innerWidth)
            const browserRemValue = parseFloat(
                getComputedStyle(document.documentElement).fontSize
            )
            if(window.innerWidth/browserRemValue < maxWindowWidthToFitNavinRem){
                setIsMobile(true)
            }
            else setIsMobile(false)
        }

        onResize()

        const onResizeDebounced = debounce(onResize, 200)
        window.addEventListener("resize", onResizeDebounced)

        return () => window.removeEventListener("resize", onResize)
    }, [])

    return { isMobile }
}
