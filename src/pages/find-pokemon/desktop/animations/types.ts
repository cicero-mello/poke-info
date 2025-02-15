import { RefObject } from "preact"

export interface UseAnimation {
    refs: {
        versionFloatingCard: RefObject<HTMLDivElement>
        noEncountersFloatingCard: RefObject<HTMLDivElement>
        placesFloatingCard: RefObject<HTMLDivElement>
    }
    animations: {
        hideVersionFloatingCard: () => Promise<void>
        showVersionFloatingCard: () => Promise<void>
        hideNoEncountersFloatingCard: () => Promise<void>
        showNoEncountersFloatingCard: () => Promise<void>
        hidePlacesFloatingCard: () => Promise<void>
        showPlacesFloatingCard: () => Promise<void>
    }
}

export type AnimationClass = (
    "come-from-bottom" |
    "go-bottom" |
    "go-right" |
    "come-from-right"
)
