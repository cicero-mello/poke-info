import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"

export const Component = styled.div<{ $isLoading: boolean }>`
${({ $isLoading }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${styleGuide.color.pearlGray};

    gap: ${pxToRem(12)};

    .evolution-item:last-child {
        padding-bottom: ${pxToRem(24)};
    }

    animation:
        ${styleGuide.keyframes.fadeIn}
        ${styleGuide.transitionTime.medium}
        linear forwards
    ;

    .evolution-item, .line {
        transition: opacity ${styleGuide.transitionTime.medium} linear;
        opacity: 1;
    }

    .spinner {
        position: fixed;
        transition: ${styleGuide.transitionTime.medium};
        right: ${pxToRem(56)};
        opacity: ${$isLoading ? 1 : 0};
        pointer-events: none;
    }

    ${$isLoading && css`
        .evolution-item, .line {
            max-height: 0;
            overflow: hidden;
            opacity: 0;
        }
    `}
`}`

export const Line = styled.span.attrs({
    className: "line"
})`
    display: flex;
    background-color: ${styleGuide.color.whiteAlpha49};
    min-height: 2px;
    width: 100%;
    border-radius: 10px;
    margin: ${pxToRem(12)} 0;
`
