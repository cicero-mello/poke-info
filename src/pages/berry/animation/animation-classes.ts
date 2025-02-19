import { getSlideFromBottom, slideFromLeft, slideFromRight } from "@style-guide/keyframes"
import { css } from "styled-components"
import { pxToRem } from "@style-guide"

export const ANIMATION_TIME = 240

export const berryAnimationClasses = css`
    opacity: 0;
    &.go-left{
        animation: ${slideFromLeft} ${ANIMATION_TIME}ms ease-in forwards reverse;
    }
    &.come-from-right{
        animation: ${slideFromRight} ${ANIMATION_TIME}ms ease-out forwards;
    }
    &.go-right{
        animation: ${slideFromRight} ${ANIMATION_TIME}ms ease-in forwards reverse;
    }
    &.come-from-left{
        animation: ${slideFromLeft} ${ANIMATION_TIME}ms ease-out forwards;
    }
    &.go-bottom{
        animation: ${getSlideFromBottom(pxToRem(315))} ${ANIMATION_TIME}ms ease-in forwards reverse;
    }
    &.come-from-bottom{
        animation: ${getSlideFromBottom(pxToRem(315))} ${ANIMATION_TIME}ms ease-out forwards;
    }
`
