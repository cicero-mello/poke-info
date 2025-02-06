import { useEffect, useState } from "preact/hooks"
import { RefObject } from "preact"

export const useHasScrollX = (elementRef: RefObject<any>):boolean => {
    const [hasScrollX, setHasScrollX] = useState(false)

    useEffect(() => {
        if(!elementRef || !elementRef.current) return

        const observer = new ResizeObserver(() => {
            const hasScroll = (
                !elementRef?.current ? false :
                elementRef.current.scrollWidth > elementRef.current.clientWidth
            )

            if(hasScroll) setHasScrollX(true)
            else setHasScrollX(false)
        })
        observer.observe(elementRef.current)

        return () => observer.unobserve(elementRef.current!)
    }, [])

    return hasScrollX
}
