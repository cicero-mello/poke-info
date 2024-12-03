import { ReactNode } from "preact/compat"

export interface InfoButtonProps {
    onClick?: (event: MouseEvent) => void | Promise<void>
    children: ReactNode
    preventNavOnClick?: boolean
    navigate?: {
        path: string,
        transition?: boolean
    }
}
