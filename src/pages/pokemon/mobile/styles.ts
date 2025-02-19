import { slideFromBottom, slideFromLeft } from "@style-guide/keyframes"
import { transitionTime } from "@style-guide/transition-time"
import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"
import { AnimationType } from "./types"

export const StatsSlot = styled.div<{$animationType: AnimationType }>`
${({ $animationType }) => css`
    justify-self: center;
    max-width: ${pxToRem(300)};
    width: 100%;
    margin: ${pxToRem(74)} auto 0 auto;
    padding: ${pxToRem(12)};
    padding-top: 0;

    .stats-container {
        gap:  ${pxToRem(9)};
        background-color: ${styleGuide.color.ironGray};
        border-radius:  ${pxToRem(22)};
        padding:  ${pxToRem(24)};
        padding-top:  ${pxToRem(12)};
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
    margin-top:  ${pxToRem(56)};

    div[role="tablist"] {
        gap:  ${pxToRem(10)};
    }

    div[role="tabpanel"] {
        border-radius: 0;
        min-height: calc(100svh - ${pxToRem(200)});

        .spinner {
            right:  ${pxToRem(24)};
            position: absolute;
        }

        > div {
            padding-right:  ${pxToRem(18)};
        }

        transition: 200ms linear;
    }

    .return-main-section {
        z-index: 100;
        top: -${pxToRem(11)};
        right: 0;
        position: absolute;
    }

    .moves-in {
        margin-right:  ${pxToRem(42)};
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
