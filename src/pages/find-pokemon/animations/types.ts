import { RefObject } from "preact"

export interface UseAnimation {
    refs: {
        versionFloatingCard: RefObject<HTMLDivElement>
        noEncountersFloatingCard: RefObject<HTMLDivElement>
    }
    animations: {
        hideVersionFloatingCard: () => Promise<void>
        showVersionFloatingCard: () => Promise<void>
        hideNoEncountersFloatingCard: () => Promise<void>
        showNoEncountersFloatingCard: () => Promise<void>
    }
}

export type AnimationClass = (
    "come-from-bottom" |
    "go-bottom"
)
