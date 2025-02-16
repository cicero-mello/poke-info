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

    section {
        animation:
            ${styleGuide.keyframes.fadeIn}
            ${styleGuide.transitionTime.medium}
            linear forwards
        ;
    }

    .spinner {
        position: fixed;
        transition: ${styleGuide.transitionTime.medium};
        right: ${pxToRem("56px")};
        opacity: ${$isLoading ? 1 : 0};
        pointer-events: none;
    }
`}`

export const ReturnToMainSection = styled.button.attrs({
    className: "return-main-section"
})<{ $hide: boolean }>`
${({ $hide }) => css`
    position: fixed;
    right: ${numbPxToRem(80)};

    width: ${numbPxToRem(24)};
    position: fixed;
    right: ${numbPxToRem(40)};
    top: ${numbPxToRem(65)};

    svg > path {
        fill: white;
        opacity: 0.5;
        transition: ${styleGuide.transitionTime.fast};
    }

    &:hover {
        svg > path {
            opacity: 0.8;
        }
    }

    transition-property: opacity;
    transition-duration: ${styleGuide.transitionTime.medium};

    ${$hide && css`
        opacity: 0;
        pointer-events: none;
    `}
`}`
