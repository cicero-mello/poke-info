import { ANIMATION_CLASSES, ANIMATION_TIME } from "./animation-classes"
import { AnimationClass, UseAnimation } from "./types"
import { applyAnimation, delay } from "@utils"
import { useRef } from "preact/hooks"

export const useAnimation = (): UseAnimation => {
    const versionListRef = useRef<HTMLDivElement>(null)
    const returnButtonRef = useRef<HTMLButtonElement>(null)
    const settedVersionRef = useRef<HTMLDivElement>(null)

    const hideVersionList = async () => {
        applyAnimation<AnimationClass>({
            element: versionListRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "go-left"
        })

        await delay(ANIMATION_TIME.goLeft)
    }

    const showVersionList = async () => {
        applyAnimation<AnimationClass>({
            element: versionListRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "come-from-left"
        })

        await delay(ANIMATION_TIME.comeFromLeft)
    }

    const hideReturnButton = async () => {
        applyAnimation<AnimationClass>({
            element: returnButtonRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "fade-out"
        })

        await delay(ANIMATION_TIME.fadeOut)
    }

    const showReturnButton = async () => {
        applyAnimation<AnimationClass>({
            element: returnButtonRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "fade-in"
        })

        await delay(ANIMATION_TIME.fadeIn)
    }

    const hideSettedVersion = async () => {
        applyAnimation<AnimationClass>({
            element: settedVersionRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "spin-zoom-out"
        })

        hideReturnButton()
        await delay(ANIMATION_TIME.spinZoomOut)
    }

    const showSettedVersion = async () => {
        applyAnimation<AnimationClass>({
            element: settedVersionRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "spin-zoom-in"
        })

        await delay(ANIMATION_TIME.spinZoomIn)
        showReturnButton()
    }

    return {
        refs: {
            versionList: versionListRef,
            returnButton: returnButtonRef,
            settedVersionRef: settedVersionRef,
        },
        animations: {
            hideVersionList,
            showVersionList,
            hideSettedVersion,
            showSettedVersion
        }
    }
}
