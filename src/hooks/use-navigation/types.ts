import { ReactNode } from "preact/compat"

export type Navigate = (
    path: string,
    transition?: boolean
) => void | Promise<void>

export interface UseNavigation {
    navigate: Navigate
}

export type TransitionState = "fadeIn" | "fadeOut" | undefined

export interface NavigationProviderProps {
    staticChildren?: ReactNode
}