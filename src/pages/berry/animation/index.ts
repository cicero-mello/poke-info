import { AnimateFunctionParams, UseAnimation } from "./types"
import { ANIMATION_TIME } from "./animation-classes"
import { useRef } from "preact/hooks"
import { delay } from "@utils"
import * as core from "./core"

export * from "./animation-classes"

export const useAnimation = (): UseAnimation => {
    const berryContentRef = useRef<HTMLDivElement>(null)
    const itemContentRef = useRef<HTMLDivElement>(null)
    const titleWrapperRef = useRef<HTMLHeadingElement>(null)

    const goLeft = async ({ keepTitle }: AnimateFunctionParams) => {
        core.animateGoLeft(berryContentRef.current)
        core.animateGoLeft(itemContentRef.current)

        if(!keepTitle){
            core.animateGoLeft(titleWrapperRef.current)
        }
        await delay(ANIMATION_TIME)
    }

    const comeFromRight = async ({ keepTitle }: AnimateFunctionParams) => {
        core.animateComeFromRight(berryContentRef.current)
        core.animateComeFromRight(itemContentRef.current)

        if(!keepTitle){
            core.animateComeFromRight(titleWrapperRef.current)
        }
        await delay(ANIMATION_TIME)
    }

    const goRight = async ({ keepTitle }: AnimateFunctionParams) => {
        core.animateGoRight(berryContentRef.current)
        core.animateGoRight(itemContentRef.current)

        if(!keepTitle){
            core.animateGoRight(titleWrapperRef.current)
        }
        await delay(ANIMATION_TIME)
    }

    const comeFromLeft = async ({ keepTitle }: AnimateFunctionParams) => {
        core.animateComeFromLeft(berryContentRef.current)
        core.animateComeFromLeft(itemContentRef.current)

        if(!keepTitle){
            core.animateComeFromLeft(titleWrapperRef.current)
        }
        await delay(ANIMATION_TIME)
    }

    const goBottom = async ({ keepTitle }: AnimateFunctionParams) => {
        core.animateGoBottom(berryContentRef.current)
        core.animateGoBottom(itemContentRef.current)

        if(!keepTitle){
            core.animateGoBottom(titleWrapperRef.current)
        }
        await delay(ANIMATION_TIME)
    }

    const comeFromBottom = async ({ keepTitle }: AnimateFunctionParams) => {
        core.animateComeFromBottom(berryContentRef.current)
        core.animateComeFromBottom(itemContentRef.current)

        if(!keepTitle){
            core.animateComeFromBottom(titleWrapperRef.current)
        }
        await delay(ANIMATION_TIME)
    }

    const hideTitleAnchor = () => {
        if(!titleWrapperRef.current) return
        const anchor = titleWrapperRef.current.children[1] as HTMLElement
        anchor.style.opacity = "0"
        anchor.style.pointerEvents = "none"
    }

    const showTitleAnchor = () => {
        if(!titleWrapperRef.current) return
        const anchor = titleWrapperRef.current.children[1] as HTMLElement
        anchor.style.opacity = "1"
        anchor.style.pointerEvents = "unset"
    }

    return {
        refs: {
            berryContentRef,
            titleWrapperRef,
            itemContentRef
        },
        animations: {
            goLeft,
            comeFromRight,
            goRight,
            comeFromLeft,
            goBottom,
            comeFromBottom,
            hideTitleAnchor,
            showTitleAnchor
        }
    }
}
