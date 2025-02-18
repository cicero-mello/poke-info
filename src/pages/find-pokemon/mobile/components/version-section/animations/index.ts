import { ANIMATION_CLASSES, ANIMATION_TIME } from "./animation-classes"
import { AnimationClass, UseAnimation } from "./types"
import { applyAnimation, delay } from "@utils"
import { useRef } from "preact/hooks"
export * from "./animation-classes"

export const useAnimation = (): UseAnimation => {
    const versionListWrapperRef = useRef<HTMLDivElement>(null)
    const returnButtonRef = useRef<HTMLButtonElement>(null)
    const settedVersionImageRef = useRef<HTMLDivElement>(null)

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

    const showVersionList = async () => {
        applyAnimation<AnimationClass>({
            element: versionListWrapperRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "come-from-left"
        })

        await delay(ANIMATION_TIME.comeFromLeft)
    }

    const hideVersionList = async () => {
        applyAnimation<AnimationClass>({
            element: versionListWrapperRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "go-left"
        })

        await delay(ANIMATION_TIME.goLeft)
    }

    const hideSettedVersion = async () => {
        applyAnimation<AnimationClass>({
            element: settedVersionImageRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "spin-zoom-out"
        })

        await delay(ANIMATION_TIME.spinZoomOut)
    }

    const showSettedVersion = async () => {
        applyAnimation<AnimationClass>({
            element: settedVersionImageRef.current,
            animationClasses: ANIMATION_CLASSES,
            desiredAnimationClass: "spin-zoom-in"
        })

        await delay(ANIMATION_TIME.spinZoomIn)
        showReturnButton()
    }

    return {
        refs: {
            versionListWrapper: versionListWrapperRef,
            returnButton: returnButtonRef,
            settedVersionImage: settedVersionImageRef,
        },
        animations: {
            showVersionList,
            hideVersionList,
            hideSettedVersion,
            showSettedVersion,
            hideReturnButton
        }
    }
}
