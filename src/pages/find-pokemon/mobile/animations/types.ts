import { RefObject } from "preact"

export interface PageAnimations {
    showVersionSection: () => Promise<void>
    hideVersionSection: () => Promise<void>
}

export interface UsePageAnimation {
    refs: {
        versionSection: RefObject<HTMLDivElement>
    }
    animations: PageAnimations
}

export type AnimationClass = (
    "fade-in" | "fade-out"
)
