import { applyAnimation } from "./core"
import { UseAnimation } from "./types"
import { useRef } from "preact/hooks"
import { delay } from "@utils"

export * from "./animation-classes"

export const useAnimation = (): UseAnimation => {
    const searchWrapperRef = useRef<HTMLDivElement>(null)
    const circlePokemonImageRef = useRef<HTMLDivElement>(null)
    const returnButtonRef = useRef<HTMLButtonElement>(null)

    const showPokemon = async () => {
        applyAnimation(
            circlePokemonImageRef?.current,
            "spin-zoom-in"
        )
        await delay(400)
    }

    const hidePokemon = async () => {
        applyAnimation(
            circlePokemonImageRef?.current,
            "spin-zoom-out"
        )
        await delay(400)
    }

    const showSearch = async () => {
        applyAnimation(
            searchWrapperRef?.current,
            "come-from-left"
        )
        await delay(400)
    }

    const hideSearch = async () => {
        applyAnimation(
            searchWrapperRef?.current,
            "go-left"
        )
        await delay(400)
    }

    const showReturnButton = async () => {
        applyAnimation(
            returnButtonRef?.current,
            "fade-in"
        )
        await delay(200)
    }

    const hideReturnButton = async () => {
        applyAnimation(
            returnButtonRef?.current,
            "fade-out"
        )
        await delay(200)
    }

    return {
        refs: {
            searchWrapper: searchWrapperRef,
            circlePokemonImage: circlePokemonImageRef,
            returnButton: returnButtonRef
        },
        animations: {
            showPokemon,
            hidePokemon,
            showSearch,
            hideSearch,
            showReturnButton,
            hideReturnButton
        }
    }
}
