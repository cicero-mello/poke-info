import { UseMomentumScrollX } from "./types"
import { useRef } from "preact/hooks"

export const useMomentumScrollX = ():UseMomentumScrollX => {
    const carouselRef = useRef<any>(null)
    let isGrabbing = false
    let cursorXInitialPosition = 0
    let scrollLeftInitialPosition = 0
    let momentumNextScrollX: number | null = 0
    let animationFrameId: number

    const handleMouseDown = (event: any) => {
        if (!carouselRef.current) return
        isGrabbing = true
        cursorXInitialPosition = event.pageX - carouselRef.current.offsetLeft
        scrollLeftInitialPosition = carouselRef.current.scrollLeft
        cancelMomentumTracking()
    }

    const handleMouseUp = () => {
        isGrabbing = false
        startMomentumTracking()
    }

    const handleMouseLeave = () => {
        isGrabbing = false
    }

    const handleMouseMove = (event: any) => {
        if (!carouselRef.current || !isGrabbing) return
        event.preventDefault()

        const cursorXCurrentPosition = event.pageX - carouselRef.current.offsetLeft
        const mouseWalk = (cursorXCurrentPosition - cursorXInitialPosition)
        const oldScrollLeft = carouselRef.current.scrollLeft
        carouselRef.current.scrollLeft = scrollLeftInitialPosition - mouseWalk

        if (Math.abs(carouselRef.current.scrollLeft - oldScrollLeft) < 3) {
            momentumNextScrollX = null
        }
        else momentumNextScrollX = carouselRef.current.scrollLeft - oldScrollLeft
    }

    const momentumLoop = () => {
        if (!carouselRef.current || momentumNextScrollX === null) return

        carouselRef.current.scrollLeft += momentumNextScrollX * 1.05
        momentumNextScrollX *= 0.95
        if (Math.abs(momentumNextScrollX) < 0.5) return
        animationFrameId = requestAnimationFrame(momentumLoop)
    }

    const startMomentumTracking = () => {
        cancelMomentumTracking()
        animationFrameId = requestAnimationFrame(momentumLoop)
    }

    const cancelMomentumTracking = () => {
        if (!animationFrameId) return
        cancelAnimationFrame(animationFrameId)
    }

    const handleWheel = () => cancelMomentumTracking()

    return {
        carouselRef,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseLeave,
        onMouseMove: handleMouseMove,
        onWheel: handleWheel
    }
}
