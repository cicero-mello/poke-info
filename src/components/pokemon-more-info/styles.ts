import { pxToRem, styleGuide } from "@style-guide"
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
    gap: ${pxToRem("24px")};

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

export const Description = styled.p`
    display: flex;
    flex-direction: column;
    ${styleGuide.text.lg}
    line-height: ${pxToRem("24px")};
`

export const Proportions = styled.span`
    display: flex;
    width: 100%;
    gap: ${pxToRem("24px")};
    flex-wrap: wrap;
`
