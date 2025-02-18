import { fadeIn, fadeOut } from "@style-guide/keyframes"
import { css, keyframes } from "styled-components"
import { numbPxToRem } from "@style-guide"
import { AnimationClass } from "./types"

export const ANIMATION_CLASSES: AnimationClass[] = [
    "fade-in",
    "fade-out",
    "go-bottom",
    "come-from-bottom"
]

export const ANIMATION_TIME = {
    fadeIn: 200,
    fadeOut: 200,
    goBottom: 200,
    comeFromBottom: 200
}

const customComeFromBottom = keyframes`
    from {
        transform: translateY(${numbPxToRem(60)});
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`

export const pageAnimationClasses = css`
    &.fade-in {
        animation:
            ${fadeIn}
            ${ANIMATION_TIME.fadeIn}ms
            linear forwards
        ;
    }
    &.fade-out {
        animation:
            ${fadeOut}
            ${ANIMATION_TIME.fadeOut}ms
            linear forwards
        ;
    }
    &.go-bottom {
        animation:
            ${customComeFromBottom}
            ${ANIMATION_TIME.goBottom}ms
            ease-in-out forwards reverse
        ;
    }
    &.come-from-bottom {
        animation:
            ${customComeFromBottom}
            ${ANIMATION_TIME.comeFromBottom}ms
            ease-in-out forwards
        ;
    }
`
