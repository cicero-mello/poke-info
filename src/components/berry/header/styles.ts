import { transitionTime } from "@style-guide/transition-time"
import styled, { css } from "styled-components"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import { pxToRem } from "@style-guide"

export const Component = styled.header.attrs({
    className: "berries-header"
})<{$retract: boolean}>`
${({$retract}) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    background-color: ${color.berry};
    padding: ${pxToRem(38)} ${pxToRem(48)};
    gap: ${pxToRem(18)};
    transition: ${transitionTime.slow} ease-in-out;
    z-index: 1;

    ${$retract && css`
        gap: 0;
        padding: ${pxToRem(14)} ${pxToRem(48)};
        p {
            opacity: 0;
        }
    `}
`}`

export const Title = styled.h1``

export const Description = styled.p`
    ${text.xl}
    overflow: hidden;
    transition: ${transitionTime.slow} ease-in-out;
`

export const HiddenDescription = styled.p.attrs({
    className: "hidden-description"
})`
    position: absolute;
    pointer-events: none;
    overflow: hidden;
    margin-right: ${pxToRem(48)};
    opacity: 0;
    ${text.xl}
`

export const RetractButton = styled.button.attrs({
    className: "berries-header-retract-button"
})`
    position: absolute;
    right:  ${pxToRem(23)};
    bottom: 0;
    width:  ${pxToRem(50)};
    height:  ${pxToRem(30)};

    &:hover {
        &::before {
            background-color: white;
        }
    }

    &::before {
        content: "";
        position: absolute;
        height: ${pxToRem(3)};
        width: 100%;
        background-color: ${color.whiteAlpha49};
        bottom: ${pxToRem(10)};
        border-radius: ${pxToRem(10)};
        transition: ${transitionTime.medium} ease-in-out;
    }
`
