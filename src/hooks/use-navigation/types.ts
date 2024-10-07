export type Navigate = (
    path: string,
    transition?: boolean
) => void | Promise<void>

export interface UseNavigation {
    navigate: Navigate
}

export type TransitionState = "fadeIn" | "fadeOut" | undefined
