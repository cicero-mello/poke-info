import { RefObject } from "preact"

export interface UseAnimation {
    refs: {
        versionList: RefObject<HTMLDivElement>
        returnButton: RefObject<HTMLButtonElement>
        settedVersionRef: RefObject<HTMLDivElement>
    }
    animations: {
        hideVersionList: () => Promise<void>
        showVersionList: () => Promise<void>
        hideSettedVersion: () => Promise<void>
        showSettedVersion: () => Promise<void>
    }
}

export type AnimationClass = (
    "go-left" | "come-from-left" |
    "spin-zoom-in" | "spin-zoom-out" |
    "fade-in" | "fade-out"
)
