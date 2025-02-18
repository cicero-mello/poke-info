import { RefObject } from "preact"

export interface UseAnimation {
    refs: {
        versionListWrapper: RefObject<HTMLDivElement>
        returnButton: RefObject<HTMLButtonElement>
        settedVersionImage: RefObject<HTMLDivElement>
    }
    animations: {
        showVersionList: () => Promise<void>
        hideVersionList: () => Promise<void>
        hideSettedVersion: () => Promise<void>
        showSettedVersion: () => Promise<void>
        hideReturnButton: () => Promise<void>
    }
}

export type AnimationClass = (
    "fade-in" | "fade-out" |
    "spin-zoom-in" | "spin-zoom-out" |
    "go-left" | "come-from-left"
)
