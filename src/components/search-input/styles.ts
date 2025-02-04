import { transitionTime } from "@style-guide/transition-time"
import { crashZoom } from "@style-guide/keyframes"
import styled, { css } from "styled-components"
import { numbPxToRem } from "@style-guide"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"

export const Component = styled.form.attrs({
    className: "search-input"
})<{$isNotFound: boolean, $isLoading: boolean}>`
${({ $isNotFound, $isLoading }) => css`
    display: flex;
    position: relative;
    height: fit-content;
    max-width: ${numbPxToRem(180)};
    width: 100%;
    overflow: hidden;
    border-radius: ${numbPxToRem(5)};
    box-shadow: ${numbPxToRem(3)} ${numbPxToRem(3)} ${numbPxToRem(4)} ${color.blackAlpha25};

    ${$isNotFound && css`
        box-shadow: 0 0 0 transparent;
        input, button {
            opacity: 0;
        }
    `}

    ${($isNotFound || $isLoading) && css`
        pointer-events: none;
    `}
`}`

export const Input = styled.input`
    ${text.sm}
    width: 100%;
    padding: ${numbPxToRem(4)} ${numbPxToRem(6)};
    margin-right: ${numbPxToRem(32)};
    background-color: ${color.snowGray};
    color: ${color.steelGray};
    caret-color: ${color.steelGray};
    transition: ${transitionTime.medium} ease-out;

    &::selection {
        background-color: ${color.steelGray};
        color: ${color.snowGray};
    }
`

export const SearchButton = styled.button
<{ $isLoading: boolean }>`
${({ $isLoading }) => css`
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    background-color: ${color.steelBlue};
    height: 100%;
    padding: 0 ${numbPxToRem(8)};

    transition:
        opacity ${transitionTime.medium} ease-out,
        background-color  ${transitionTime.fast} ease-in-out
    ;

    &:hover {
        background-color: ${color.periwinkle};
        .magnifying-glass-ico {
            circle, line {
                stroke: ${color.frostGray};
            }
        }
    }

    .magnifying-glass-ico {
        width: ${numbPxToRem(16)};
        height: ${numbPxToRem(16)};

        ${$isLoading && css`
            opacity: 0;
        `}
    }

    .spinner {
        width: ${numbPxToRem(16)};
        height: ${numbPxToRem(16)};
        mask: radial-gradient(farthest-side,#0000 calc(100% - 0.19rem),#000 0);
        -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 0.19rem),#000 0);
        opacity: 0;

        ${$isLoading && css`
            opacity: 1;
        `}
    }
`}`

export const NotFoundMessage = styled.p`
    position: absolute;
    text-align: center;
    align-self: center;
    width: 100%;
    font-weight: bold;

    animation: ${crashZoom} 400ms ease-in-out;
`
