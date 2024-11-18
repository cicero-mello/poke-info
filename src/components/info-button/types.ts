import { ReactNode } from "preact/compat"

export interface InfoButtonProps {
    onClick?: () => void | Promise<void>
    children: ReactNode
}
