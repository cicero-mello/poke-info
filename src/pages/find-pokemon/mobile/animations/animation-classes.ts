import { fadeIn } from "@style-guide/keyframes"
import { AnimationClass } from "./types"
import { css } from "styled-components"

export const ANIMATION_CLASSES: AnimationClass[] = [
    "fade-in",
    "fade-out"
]

export const ANIMATION_TIME = {
    fadeIn: 200,
    fadeOut: 200
}

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
            ${fadeIn}
            ${ANIMATION_TIME.fadeOut}ms
            linear forwards reverse
        ;
    }
`
