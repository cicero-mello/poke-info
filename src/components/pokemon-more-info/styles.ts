import { numbPxToRem, pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"

export const Component = styled.div<{ $isLoading: boolean }>`
${({ $isLoading }) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;

    ${styleGuide.text.base}
    color: ${styleGuide.color.pearlGray};

    animation:
        ${styleGuide.keyframes.fadeIn}
        ${styleGuide.transitionTime.medium}
        linear forwards
    ;

    .spinner {
        right: -${pxToRem("12px")};
    }

    > *:not(.spinner){
        transition-property: opacity;
        transition-duration: ${styleGuide.transitionTime.medium};
    }

    ${$isLoading && css`
        > *:not(.spinner){
            opacity: 0;
        }
    `}
`}`

export const ReturnToMain = styled.button`
    position: fixed;
    right: ${numbPxToRem(80)};

    width: ${numbPxToRem(24)};
    position: fixed;
    right: ${numbPxToRem(40)};
    top: ${numbPxToRem(65)};

    svg > path {
        fill: white;
        opacity: 0.5;
    }
`
