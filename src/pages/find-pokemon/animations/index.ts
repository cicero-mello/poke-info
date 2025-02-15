import { ANIMATION_CLASSES, ANIMATION_TIME } from "./animation-classes"
import {  AnimationClass, UseAnimation } from "./types"
import { applyAnimation, delay } from "@utils"
import { useRef } from "preact/hooks"

export const useAnimation = (): UseAnimation => {
    const versionFloatingCardRef = useRef<HTMLDivElement>(null)
    const noEncountersFloatingCardRef = useRef<HTMLDivElement>(null)
    const placesFloatingCardRef = useRef<HTMLDivElement>(null)

    const hideVersionFloatingCard = async () => {
        applyAnimation<AnimationClass>({
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "go-bottom",
            element: versionFloatingCardRef.current
        })
        await delay(ANIMATION_TIME.goBottom)
    }

    const showVersionFloatingCard = async () => {
        applyAnimation<AnimationClass>({
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "come-from-bottom",
            element: versionFloatingCardRef.current
        })
        await delay(ANIMATION_TIME.comeFromBottom)
    }

    const hideNoEncountersFloatingCard = async () => {
        applyAnimation<AnimationClass>({
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "go-bottom",
            element: noEncountersFloatingCardRef.current
        })
        await delay(ANIMATION_TIME.goBottom)
    }

    const showNoEncountersFloatingCard = async () => {
        applyAnimation<AnimationClass>({
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "come-from-bottom",
            element: noEncountersFloatingCardRef.current
        })
        await delay(ANIMATION_TIME.comeFromBottom)
    }

    const hidePlacesFloatingCard = async () => {
        applyAnimation<AnimationClass>({
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "go-right",
            element: placesFloatingCardRef.current
        })
        await delay(ANIMATION_TIME.goRight)
    }

    const showPlacesFloatingCard = async () => {
        console.log(placesFloatingCardRef)
        applyAnimation<AnimationClass>({
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "come-from-right",
            element: placesFloatingCardRef.current
        })
        await delay(ANIMATION_TIME.comeFromRight)
    }

    return {
        refs: {
            versionFloatingCard: versionFloatingCardRef,
            noEncountersFloatingCard: noEncountersFloatingCardRef,
            placesFloatingCard: placesFloatingCardRef
        },
        animations: {
            hideVersionFloatingCard,
            showVersionFloatingCard,
            hideNoEncountersFloatingCard,
            showNoEncountersFloatingCard,
            hidePlacesFloatingCard,
            showPlacesFloatingCard
        }
    }
}
