import { transitionTime } from "@style-guide/transition-time"
import { FocusOrigin } from "@hooks/use-focus-origin/types"
import { crashZoom } from "@style-guide/keyframes"
import { focusOutline } from "@style-guide/focus"
import styled, { css } from "styled-components"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import { pxToRem } from "@style-guide"

export const Component = styled.form.attrs({
    className: "search-input"
})<{$isNotFound: boolean, $isLoading: boolean, $focusOrigin: FocusOrigin}>`
${({ $isNotFound, $isLoading, $focusOrigin }) => css`
    display: flex;
    position: relative;
    height: fit-content;
    max-width: ${pxToRem(180)};
    width: 100%;
    border-radius: ${pxToRem(5)};
    box-shadow: ${pxToRem(3)} ${pxToRem(3)} ${pxToRem(4)} ${color.blackAlpha25};

    ${$isNotFound && css`
        box-shadow: 0 0 0 transparent;
        input, button {
            opacity: 0;
        }
    `}

    ${($isNotFound || $isLoading) && css`
        pointer-events: none;
    `}

    input {
        outline: none;
        ${$focusOrigin === "tab" && css`
            &:focus {
                ${focusOutline}
            }
        `}
    }
`}`

export const Input = styled.input`
    ${text.sm}
    width: 100%;
    padding: ${pxToRem(4)} ${pxToRem(6)};
    margin-right: ${pxToRem(32)};
    background-color: ${color.snowGray};
    color: ${color.steelGray};
    caret-color: ${color.steelGray};
    border-radius: ${pxToRem(5)} 0 0 ${pxToRem(5)};

    transition-property: background-color, color;
    transition-timing-function: ease-out, ease-out;
    transition-duration: ${transitionTime.medium}, ${transitionTime.medium};

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
    padding: 0 ${pxToRem(8)};
    border-radius: 0 ${pxToRem(5)} ${pxToRem(5)} 0;

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
        width: ${pxToRem(16)};
        height: ${pxToRem(16)};

        ${$isLoading && css`
            opacity: 0;
        `}
    }

    .spinner {
        width: ${pxToRem(16)};
        height: ${pxToRem(16)};
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
