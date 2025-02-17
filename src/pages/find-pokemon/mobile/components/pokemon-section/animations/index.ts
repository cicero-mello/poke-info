import { ANIMATION_CLASSES, ANIMATION_TIME } from "./animation-classes"
import { AnimationClass, UseAnimation } from "./types"
import { applyAnimation, delay } from "@utils"
import { useRef } from "preact/hooks"

export const useAnimation = (): UseAnimation => {
    const searchWrapperRef = useRef<HTMLDivElement>(null)
    const returnButtonRef = useRef<HTMLButtonElement>(null)
    const circlePokemonImageRef = useRef<HTMLDivElement>(null)

    const showReturnButton = async () => {
        applyAnimation<AnimationClass>({
            element: returnButtonRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "fade-in"
        })

        await delay(ANIMATION_TIME.fadeIn)
    }

    const hideReturnButton = async () => {
        applyAnimation<AnimationClass>({
            element: returnButtonRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "fade-out"
        })

        await delay(ANIMATION_TIME.fadeOut)
    }

    const showSearchWrapper = async () => {
        applyAnimation<AnimationClass>({
            element: searchWrapperRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "fade-in"
        })

        await delay(ANIMATION_TIME.fadeIn)
    }

    const hideSearchWrapper = async () => {
        applyAnimation<AnimationClass>({
            element: searchWrapperRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "fade-out"
        })

        await delay(ANIMATION_TIME.fadeOut)
    }

    const showPokemon = async () => {
        applyAnimation<AnimationClass>({
            element: circlePokemonImageRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "fade-in"
        })

        await delay(ANIMATION_TIME.fadeIn)
        showReturnButton()
    }

    const hidePokemon = async () => {
        hideReturnButton()

        applyAnimation<AnimationClass>({
            element: circlePokemonImageRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "fade-out"
        })
        await delay(ANIMATION_TIME.fadeOut)
    }

    return {
        refs: {
            searchWrapper: searchWrapperRef,
            returnButton: returnButtonRef,
            circlePokemonImage: circlePokemonImageRef,
        },
        animations: {
            showSearchWrapper,
            hideSearchWrapper,
            showPokemon,
            hidePokemon
        }
    }
}
