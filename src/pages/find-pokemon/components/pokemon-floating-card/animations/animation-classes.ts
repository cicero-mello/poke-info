import { fadeIn, slideFromLeft, spinZoom } from "@style-guide/keyframes"
import { css } from "styled-components"

export const pokemonFloatingCardAnimationClasses = css`
    &.go-left{
        animation: ${slideFromLeft} 400ms ease-out forwards reverse;
    }
    &.come-from-left{
        animation: ${slideFromLeft} 400ms ease-out forwards;
    }
    &.spin-zoom-in{
        animation: ${spinZoom} 500ms ease-in-out forwards;
    }
    &.spin-zoom-out{
        animation: ${spinZoom} 500ms ease-in-out reverse forwards;
    }
    &.fade-in {
        animation: ${fadeIn} 200ms linear forwards;
    }
    &.fade-out {
        animation: ${fadeIn} 200ms linear forwards reverse;
    }
`
