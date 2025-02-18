import { ANIMATION_CLASSES, ANIMATION_TIME } from "./animation-classes"
import { AnimationClass, UsePageAnimation } from "./types"
import { applyAnimation, delay } from "@utils"
import { useRef } from "preact/hooks"
export * from "./animation-classes"

export const usePageAnimation = (): UsePageAnimation => {
    const versionSectionRef = useRef<HTMLDivElement>(null)
    const noEncountersSectionRef = useRef<HTMLDivElement>(null)
    const placesSectionRef = useRef<HTMLDivElement>(null)

    const showVersionSection = async () => {
        applyAnimation<AnimationClass>({
            element: versionSectionRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "fade-in"
        })

        await delay(ANIMATION_TIME.fadeIn)
    }

    const hideVersionSection = async () => {
        applyAnimation<AnimationClass>({
            element: versionSectionRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "fade-out"
        })

        await delay(ANIMATION_TIME.fadeOut)
    }

    const showNoEncountersSection = async () => {
        applyAnimation<AnimationClass>({
            element: noEncountersSectionRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "fade-in"
        })

        await delay(ANIMATION_TIME.fadeIn)
    }

    const hideNoEncountersSection = async () => {
        applyAnimation<AnimationClass>({
            element: noEncountersSectionRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "fade-out"
        })

        await delay(ANIMATION_TIME.fadeOut)
    }

    const showPlacesSection = async () => {
        applyAnimation<AnimationClass>({
            element: placesSectionRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "fade-in"
        })

        await delay(ANIMATION_TIME.fadeIn)
    }

    const hidePlacesSection = async () => {
        applyAnimation<AnimationClass>({
            element: placesSectionRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "fade-out"
        })

        await delay(ANIMATION_TIME.fadeOut)
    }

    return {
        refs: {
            versionSection: versionSectionRef,
            noEncountersSection: noEncountersSectionRef,
            placesSection: placesSectionRef
        },
        animations: {
            showVersionSection,
            hideVersionSection,
            showNoEncountersSection,
            hideNoEncountersSection,
            showPlacesSection,
            hidePlacesSection
        }
    }
}
