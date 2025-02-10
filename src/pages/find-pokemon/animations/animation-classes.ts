import { AnimationClass } from "./types"
import { css, keyframes } from "styled-components"
import { numbPxToRem } from "@style-guide"

export const ANIMATION_CLASSES: AnimationClass[] = [
    "come-from-bottom",
    "go-bottom"
]

export const ANIMATION_TIME = {
    goBottom: 800,
    comeFromBottom: 960,
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
        max-width: ${numbPxToRem(340)};
        max-height: ${numbPxToRem(340)};
        margin-left: ${numbPxToRem(24)};
        padding-right: ${numbPxToRem(8)};
        transform: translateY(200px);
        opacity: 0;
    }
    100% {
        max-width: ${numbPxToRem(340)};
        max-height: ${numbPxToRem(340)};
        margin-left: ${numbPxToRem(24)};
        padding-right: ${numbPxToRem(8)};
        transform: translateY(0);
        opacity: 1;
    }
`

export const versionFloatingCardAnimationClasses = css`
    &.go-bottom{
        animation:
            ${customComeFromBottom}
            ${ANIMATION_TIME.goBottom}ms
            ease-in-out reverse forwards
        ;
    }
    &.come-from-bottom{
        animation:
            ${customComeFromBottom}
            ${ANIMATION_TIME.comeFromBottom}ms
            ease-in-out forwards
        ;
    }
`
