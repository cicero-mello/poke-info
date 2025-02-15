import { RefObject } from "preact"

export interface NoEncountersFloatingCardProps {
    componentRef?: RefObject<HTMLDivElement>
}

export interface PongParams {
    container: HTMLElement
    item: HTMLElement
    horizontalSpeed?: number
    verticalSpeed?: number
}
