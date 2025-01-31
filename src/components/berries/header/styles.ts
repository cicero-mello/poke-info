import { transitionTime } from "@style-guide/transition-time"
import styled, { css } from "styled-components"
import { numbPxToRem } from "@style-guide"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"

export const Component = styled.div.attrs({
    className: "berries-header"
})<{$retract: boolean}>`
${({$retract}) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    background-color: ${color.berry};
    padding: ${numbPxToRem(38)} ${numbPxToRem(48)};
    gap: ${numbPxToRem(18)};
    transition: ${transitionTime.slow} ease-in-out;

    ${$retract && css`
        gap: 0;
        padding: ${numbPxToRem(14)} ${numbPxToRem(48)};
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

export const RetractButton = styled.button.attrs({
    className: "berries-header-retract-button"
})`
    position: absolute;
    right:  ${numbPxToRem(23)};
    bottom: 0;
    width:  ${numbPxToRem(50)};
    height:  ${numbPxToRem(30)};

    &:hover {
        &::before {
            background-color: white;
        }
    }

    &::before {
        content: "";
        position: absolute;
        height: ${numbPxToRem(3)};
        width: 100%;
        background-color: ${color.whiteAlpha49};
        bottom: ${numbPxToRem(10)};
        border-radius: ${numbPxToRem(10)};
        transition: ${transitionTime.medium} ease-in-out;
    }
`
