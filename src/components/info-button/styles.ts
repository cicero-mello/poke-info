import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"

const componentCss = css`
    position: relative;
    height: fit-content;
    border-bottom: 2px solid ${styleGuide.color.whiteAlpha49};
    color: ${styleGuide.color.pearlGray};
    ${styleGuide.text.base}

    &:hover {
        & > .text {
            transform: translateY(-${pxToRem(3)});
        }
    }
`

export const StyledButton = styled.button.attrs({
    className: "info-button"
})`
    ${componentCss}
`

export const StyledAnchor = styled.a.attrs({
    className: "info-button"
})`
    ${componentCss}
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
