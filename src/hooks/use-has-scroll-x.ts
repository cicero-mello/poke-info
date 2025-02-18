import { useEffect, useState } from "preact/hooks"
import { RefObject } from "preact"

export const useHasScrollX = (
    elementRef: RefObject<HTMLElement>
): boolean => {
    const [hasScrollX, setHasScrollX] = useState(false)
    const [element, setElement] = useState(elementRef.current)

    useEffect(() => {
        if(element != elementRef.current){
            setElement(elementRef.current)
        }
    })

    useEffect(() => {
        if(!element) return

        const updateScrollX = () => {
            setHasScrollX(element.scrollWidth > element.clientWidth)
        }

        const observer = new ResizeObserver(updateScrollX)
        observer.observe(element)
        updateScrollX()

        return () => observer.disconnect()
    }, [element])

    return hasScrollX
}
