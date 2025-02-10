import { ANIMATION_CLASSES, ANIMATION_TIME } from "./animation-classes"
import {  AnimationClass, UseAnimation } from "./types"
import { applyAnimation, delay } from "@utils"
import { useRef } from "preact/hooks"

export const useAnimation = (): UseAnimation => {
    const versionFloatingCardRef = useRef<HTMLDivElement>(null)

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

    return {
        refs: {
            versionFloatingCard: versionFloatingCardRef
        },
        animations: {
            hideVersionFloatingCard,
            showVersionFloatingCard
        }
    }
}
