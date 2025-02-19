import { css, keyframes } from "styled-components"
import { AnimationClass } from "./types"
import { pxToRem } from "@style-guide"

export const ANIMATION_CLASSES: AnimationClass[] = [
    "come-from-bottom",
    "go-bottom",
    "go-right",
    "come-from-right"
]

export const ANIMATION_TIME = {
    goBottom: 800,
    comeFromBottom: 960,
    goRight: 800,
    comeFromRight: 960,
}

const customComeFromBottom = keyframes`
    0% {
        max-width: 0;
        max-height: 0;
        margin-left: 0;
        padding-right: 0;
        opacity: 0;
    }
    50% {
        max-width: ${pxToRem(340)};
        max-height: ${pxToRem(340)};
        margin-left: ${pxToRem(24)};
        padding-right: ${pxToRem(8)};
        transform: translateY(200px);
        opacity: 0;
    }
    100% {
        max-width: ${pxToRem(340)};
        max-height: ${pxToRem(340)};
        margin-left: ${pxToRem(24)};
        padding-right: ${pxToRem(8)};
        transform: translateY(0);
        opacity: 1;
    }
`

const customComeFromRight = keyframes`
    0% {
        max-width: 0;
        max-height: 0;
        margin-left: 0;
        padding-right: 0;
        opacity: 0;
    }
    50% {
        max-width: ${pxToRem(340)};
        max-height: ${pxToRem(340)};
        margin-left: ${pxToRem(24)};
        padding-right: ${pxToRem(8)};
        transform: translateX(200px);
        opacity: 0;
    }
    100% {
        max-width: ${pxToRem(340)};
        max-height: ${pxToRem(340)};
        margin-left: ${pxToRem(24)};
        padding-right: ${pxToRem(8)};
        transform: translateX(0);
        opacity: 1;
    }
`

export const versionFloatingCardAnimationClasses = css`
    &.go-bottom {
        animation:
            ${customComeFromBottom}
            ${ANIMATION_TIME.goBottom}ms
            ease-in-out reverse forwards
        ;
    }
    &.come-from-bottom {
        animation:
            ${customComeFromBottom}
            ${ANIMATION_TIME.comeFromBottom}ms
            ease-in-out forwards
        ;
    }
    &.go-right {
        animation:
            ${customComeFromRight}
            ${ANIMATION_TIME.goRight}ms
            ease-in-out reverse forwards
        ;
    }
    &.come-from-right {
        animation:
            ${customComeFromRight}
            ${ANIMATION_TIME.comeFromRight}ms
            ease-in-out forwards
        ;
    }
`
