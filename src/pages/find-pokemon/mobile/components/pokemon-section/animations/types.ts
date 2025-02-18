import { RefObject } from "preact"

export interface UseAnimation {
    refs: {
        searchWrapper: RefObject<HTMLDivElement>
        returnButton: RefObject<HTMLButtonElement>
        circlePokemonImage: RefObject<HTMLDivElement>
    }
    animations: {
        showSearchWrapper: () => Promise<void>
        hideSearchWrapper: () => Promise<void>
        showPokemon: () => Promise<void>
        hidePokemon: () => Promise<void>
    }
}

export type AnimationClass = (
    "fade-in" | "fade-out"
)
