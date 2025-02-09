import { RefObject } from "preact"

export interface UseAnimation {
    refs: {
        searchWrapper: RefObject<HTMLDivElement>
        circlePokemonImage: RefObject<HTMLDivElement>
        returnButton: RefObject<HTMLButtonElement>
    }
    animations: {
        showPokemon: () => Promise<void>
        hidePokemon: () => Promise<void>
        showSearch: () => Promise<void>
        hideSearch: () => Promise<void>
        showReturnButton: () => Promise<void>
        hideReturnButton: () => Promise<void>
    }
}

export type AnimationClass = (
    "go-left" | "come-from-left" |
    "spin-zoom-in" | "spin-zoom-out" |
    "fade-in" | "fade-out"
)
