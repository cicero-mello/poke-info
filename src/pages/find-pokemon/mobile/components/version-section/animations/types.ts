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
    }
}

export type AnimationClass = (
    "fade-in" | "fade-out"
)
