import { numbPxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Component = styled.button.attrs({
    className: "info-button"
})`
    position: relative;
    border-bottom: 2px solid ${styleGuide.color.whiteAlpha49};
    color: ${styleGuide.color.pearlGray};
    ${styleGuide.text.base}

    &:hover {
        & > .text {
            transform: translateY(-${numbPxToRem(3)});
        }
    }
`

export const Text = styled.span.attrs({
    className: "text"
})`
    transition: ${styleGuide.transitionTime.medium} ease-in-out;
    position: absolute;
`

export const HiddenText = styled.span`
    opacity: 0;
    color: transparent;
    user-select: none;
`
