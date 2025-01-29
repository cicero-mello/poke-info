import styled, { css } from "styled-components"
import { numbPxToRem, styleGuide } from "@style-guide"
import { AnimationType } from "./types"
import { fanRotate, slideFromRight } from "@style-guide/keyframes"

export const LeftSide = styled.div
<{ $animationType: AnimationType }>`
${({ $animationType }) => css`
    display: flex;
    position: relative;
    justify-content: center;
    min-width: ${numbPxToRem(420)};

    .pokemon-name-and-stats {
        padding-top: ${numbPxToRem(88)};
    }

    .stats-container {
        max-width: ${numbPxToRem(270)};
        padding: ${numbPxToRem(0)} ${numbPxToRem(44)} ${numbPxToRem(2)} ${numbPxToRem(44)};
        margin: ${numbPxToRem(20)} 0 ${numbPxToRem(48)} 0;
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
    width: ${numbPxToRem(470)};
    height:  ${numbPxToRem(470)};
    position: absolute;

    border-radius: ${numbPxToRem(27)} 100% ${numbPxToRem(27)} ${numbPxToRem(45)};
    transform: rotate(45deg);
    background-color: ${styleGuide.color.ironGray};
    top: ${numbPxToRem(30)};
    left: ${numbPxToRem(5)};
`

export const RightSide = styled.div
<{ $animationType: AnimationType }>`
${({ $animationType }) => css`
    display: flex;
    width: 100%;
    padding: ${numbPxToRem(24)} ${numbPxToRem(24)} ${numbPxToRem(24)} 0;
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
