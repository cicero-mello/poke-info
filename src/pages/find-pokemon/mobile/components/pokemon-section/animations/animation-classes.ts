import { fadeIn, spinZoom } from "@style-guide/keyframes"
import { css, keyframes } from "styled-components"
import { AnimationClass } from "./types"
import { pxToRem } from "@style-guide"

export const ANIMATION_CLASSES: AnimationClass[] = [
    "fade-in",
    "fade-out",
    "spin-zoom-in",
    "spin-zoom-out",
    "go-left",
    "come-from-left"
]

export const ANIMATION_TIME = {
    fadeIn: 200,
    fadeOut: 200,
    spinZoomIn: 500,
    spinZoomOut: 500,
    goLeft: 300,
    comeFromLeft: 300
}

const customGoLeft = keyframes`
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateX(-${pxToRem(100)});
        opacity: 0;
        pointer-events: none;
    }
`

export const animationClasses = css`
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
    &.go-left{
        animation:
            ${customGoLeft}
            ${ANIMATION_TIME.goLeft}ms
            ease-in-out forwards
        ;
    }
    &.come-from-left{
        animation:
            ${customGoLeft}
            ${ANIMATION_TIME.comeFromLeft}ms
            ease-in-out forwards reverse
        ;
    }
`
