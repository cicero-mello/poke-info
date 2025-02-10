import { RefObject } from "preact"

export interface UseAnimation {
    refs: {
        versionFloatingCard: RefObject<HTMLDivElement>
    }
    animations: {
        hideVersionFloatingCard: () => Promise<void>
        showVersionFloatingCard: () => Promise<void>
    }
}

export type AnimationClass = (
    "come-from-bottom" |
    "go-bottom"
)
