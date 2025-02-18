import { ANIMATION_CLASSES, ANIMATION_TIME } from "./animation-classes"
import { applyAnimation, delay } from "@utils"
import { AnimationClass } from "./types"
import { useRef } from "preact/hooks"
export * from "./animation-classes"

export const usePageAnimation = () => {
    const versionSectionRef = useRef<HTMLDivElement>(null)
    const noEncountersSectionRef = useRef<HTMLDivElement>(null)

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

    return {
        refs: {
            versionSection: versionSectionRef,
            noEncountersSection: noEncountersSectionRef
        },
        animations: {
            showVersionSection,
            hideVersionSection,
            showNoEncountersSection,
            hideNoEncountersSection
        }
    }
}
