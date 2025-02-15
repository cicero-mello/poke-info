import { fadeIn, slideFromLeft, spinZoom } from "@style-guide/keyframes"
import { AnimationClass } from "./types"
import { css } from "styled-components"

export const ANIMATION_CLASSES: AnimationClass[] = [
    "go-left",
    "come-from-left",
    "spin-zoom-in",
    "spin-zoom-out",
    "fade-in",
    "fade-out"
]

export const ANIMATION_TIME = {
    goLeft: 400,
    comeFromLeft: 400,
    spinZoomIn: 500,
    spinZoomOut: 500,
    fadeIn: 200,
    fadeOut: 200
}

export const versionFloatingCardAnimationClasses = css`
    &.go-left{
        animation:
            ${slideFromLeft}
            ${ANIMATION_TIME.goLeft}ms
            ease-out forwards reverse
        ;
    }
    &.come-from-left{
        animation:
            ${slideFromLeft}
            ${ANIMATION_TIME.comeFromLeft}ms
            ease-out forwards
        ;
    }
    &.spin-zoom-in{
        animation:
            ${spinZoom}
            ${ANIMATION_TIME.spinZoomIn}ms
            ease-in-out forwards
        ;
    }
    &.spin-zoom-out{
        animation:
            ${spinZoom}
            ${ANIMATION_TIME.spinZoomOut}ms
            ease-in-out reverse forwards
        ;
    }
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
