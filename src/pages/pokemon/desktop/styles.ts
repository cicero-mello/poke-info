import styled, { css, keyframes } from "styled-components"
import { numbPxToRem, styleGuide } from "@style-guide"
import { AnimationType } from "./types"

export const fanRotate = keyframes`
    from {
        opacity: 0;
        transform-origin: 0% 50%;
        transform: rotate(80deg);
    }
    to {
        opacity: 1;
        transform-origin: 0% 50%;
        transform: rotate(0) translateY(0);
    }
`

export const slideFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(400px);
    }
    to {
        opacity: 1;
        transform: rotate(0) translateX(0);
    }
`


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
            ${slideFromLeft}
            ${styleGuide.transitionTime.moreSlow}
            ease-in-out forwards
        ;
    `}

    ${$animationType === "returning" && css`
        pointer-events: none;
        animation:
            ${slideFromLeft}
            ${styleGuide.transitionTime.moreSlow}
            ease-in-out forwards reverse
        ;
    `}
`}`
