import { RefObject } from "preact"
import { useEffect, useRef, useState } from "preact/hooks"

export type ScrollDirection = "up" | "down" | undefined

export const useScrollDirection = (
    elementRef: RefObject<HTMLElement>
): ScrollDirection => {
    const [secondRender, setSecondRender] = useState(false)
    const lastScrollTop = useRef(0)
    const [
        scrollDirection,
        setScrollDirection
    ] = useState<ScrollDirection>()

    useEffect(() => {
        const scroll = (event: Event) => {
            const target = event.target as HTMLElement
            const { scrollTop, scrollHeight, clientHeight } = target
            const isScrollBottomMax = (scrollTop + clientHeight) >= scrollHeight

            if(isScrollBottomMax) return

            if(scrollTop > lastScrollTop.current){
                setScrollDirection("down")
            }
            else if(scrollTop < lastScrollTop.current){
                setScrollDirection("up")
            }
            else {
                setScrollDirection(undefined)
            }

            lastScrollTop.current = scrollTop
        }

        elementRef.current?.addEventListener("scroll", scroll)

        return () => {
            elementRef.current?.removeEventListener("scroll", scroll)
        }
    }, [secondRender])

    setTimeout(() => {
        if(!secondRender) setSecondRender(true)
    }, 200)

    console.log(scrollDirection)

    return scrollDirection
}
