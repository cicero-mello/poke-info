import { RefObject } from "preact"

export interface PageAnimations {
    showVersionSection: () => Promise<void>
    hideVersionSection: () => Promise<void>
    showNoEncountersSection: () => Promise<void>
    hideNoEncountersSection: () => Promise<void>
    showPlacesSection: () => Promise<void>
    hidePlacesSection: () => Promise<void>
}

export interface UsePageAnimation {
    refs: {
        versionSection: RefObject<HTMLDivElement>
        noEncountersSection: RefObject<HTMLDivElement>
        placesSection: RefObject<HTMLDivElement>
    }
    animations: PageAnimations
}

export type AnimationClass = (
    "fade-in" | "fade-out" |
    "go-bottom" | "come-from-bottom"
)
