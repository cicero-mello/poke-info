import { ComponentChildren } from "preact"
import { RefObject } from "preact/compat"

export interface FloatingCardProps {
    title: string
    children: ComponentChildren
    componentRef?: RefObject<HTMLDivElement>
    id?: string
}
