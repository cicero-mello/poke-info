import { fanRotate, slideFromRight } from "@style-guide/keyframes"
import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"
import { AnimationType } from "./types"

export const LeftSide = styled.div
<{ $animationType: AnimationType }>`
${({ $animationType }) => css`
    display: flex;
    position: relative;
    justify-content: center;
    min-width: ${pxToRem(420)};

    .pokemon-name-and-stats {
        padding-top: ${pxToRem(88)};
    }

    .stats-container {
        max-width: ${pxToRem(270)};
        padding: ${pxToRem(0)} ${pxToRem(44)} ${pxToRem(2)} ${pxToRem(44)};
        margin: ${pxToRem(20)} 0 ${pxToRem(48)} 0;
    }

    ${$animationType === "init" && css`
        animation:
            ${fanRotate}
            ${styleGuide.transitionTime.moreSlow}
            ease-in-out forwards
        ;
    `}

    ${$animationType === "returning" && css`
        pointer-events: none;
        animation:
            ${fanRotate}
            ${styleGuide.transitionTime.moreSlow}
            ease-in-out forwards reverse
        ;
    `}
`}`

export const Fan = styled.div`
    width: ${pxToRem(470)};
    height:  ${pxToRem(470)};
    position: absolute;

    border-radius: ${pxToRem(27)} 100% ${pxToRem(27)} ${pxToRem(45)};
    transform: rotate(45deg);
    background-color: ${styleGuide.color.ironGray};
    top: ${pxToRem(30)};
    left: ${pxToRem(5)};
`

export const RightSide = styled.div
<{ $animationType: AnimationType }>`
${({ $animationType }) => css`
    display: flex;
    width: 100%;
    padding: ${pxToRem(24)} ${pxToRem(24)} ${pxToRem(24)} 0;
    height: 100%;

    ${$animationType === "init" && css`
        animation:
            ${slideFromRight}
            ${styleGuide.transitionTime.moreSlow}
            ease-in-out forwards
        ;
    `}

    ${$animationType === "returning" && css`
        pointer-events: none;
        animation:
            ${slideFromRight}
            ${styleGuide.transitionTime.moreSlow}
            ease-in-out forwards reverse
        ;
    `}
`}`
