import { numbPxToRem, styleGuide } from "@style-guide"
import { slideFromBottom, slideFromLeft } from "@style-guide/keyframes"
import { transitionTime } from "@style-guide/transition-time"
import styled, { css } from "styled-components"
import { AnimationType } from "./types"

export const StatsSlot = styled.div<{$animationType: AnimationType }>`
${({ $animationType }) => css`
    justify-self: center;
    max-width: ${numbPxToRem(300)};
    width: 100%;
    margin: ${numbPxToRem(74)} auto 0 auto;
    padding: ${numbPxToRem(12)};
    padding-top: 0;

    .stats-container {
        gap:  ${numbPxToRem(9)};
        background-color: ${styleGuide.color.ironGray};
        border-radius:  ${numbPxToRem(22)};
        padding:  ${numbPxToRem(24)};
        padding-top:  ${numbPxToRem(12)};
    }

    ${$animationType === "init" && css`
        animation:
            ${slideFromLeft}
            ${transitionTime.moreSlow}
            ease-out forwards
        ;
    `}

    ${$animationType === "returning" && css`
        pointer-events: none;
        animation:
            ${slideFromLeft}
            ${transitionTime.moreSlow}
            ease-out forwards reverse
        ;
    `}
`}`

export const TabViewerSlot = styled.div<{$animationType: AnimationType }>`
${({ $animationType }) => css`
    margin-top:  ${numbPxToRem(56)};

    div[role="tablist"] {
        gap:  ${numbPxToRem(10)};
    }

    div[role="tabpanel"] {
        border-radius: 0;
        min-height: calc(100svh - ${numbPxToRem(200)});

        .spinner {
            right:  ${numbPxToRem(24)};
            position: absolute;
        }

        > div {
            padding-right:  ${numbPxToRem(18)};
        }

        transition: 200ms linear;
    }

    .return-main-section {
        z-index: 100;
        top: -${numbPxToRem(11)};
        right: 0;
        position: absolute;
    }

    .moves-in {
        margin-right:  ${numbPxToRem(42)};
    }

    ${$animationType === "init" && css`
        animation:
            ${slideFromBottom}
            ${transitionTime.moreSlow}
            ease-out forwards
        ;
    `}

    ${$animationType === "returning" && css`
        pointer-events: none;
        animation:
            ${slideFromBottom}
            ${transitionTime.moreSlow}
            ease-out forwards reverse
        ;
    `}
`}`
