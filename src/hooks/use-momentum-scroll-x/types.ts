import { RefObject } from "preact"

export interface UseMomentumScrollX {
    carouselRef: RefObject<any>
    onMouseDown: (event: any) => void
    onMouseUp: (event: any) => void
    onMouseLeave: (event: any) => void
    onMouseMove: (event: any) => void
    onWheel: (event: any) => void
}
