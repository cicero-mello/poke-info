import { Ref } from "preact"

export interface AnimateFunctionParams {
    keepTitle?: boolean
}

type AnimateFunction = (params: AnimateFunctionParams ) => Promise<any>

export interface UseAnimation {
    refs: {
        titleWrapperRef: Ref<HTMLHeadElement>
        berryContentRef: Ref<HTMLDivElement>
        itemContentRef: Ref<HTMLDivElement>
    }
    animations: {
        goLeft: AnimateFunction
        comeFromRight: AnimateFunction
        goRight: AnimateFunction
        comeFromLeft: AnimateFunction
        goBottom: AnimateFunction
        comeFromBottom: AnimateFunction
        hideTitleAnchor: () => void | Promise<void>
        showTitleAnchor: () => void | Promise<void>
    }
}

export type AnimationClass = (
    "go-left" | "come-from-right" |
    "go-right" | "come-from-left" |
    "go-bottom" | "come-from-bottom"
)
