import { ButtonTheme, ThemeFunction } from "../types"
import { pxToRem, styleGuide } from "@style-guide"
import { color } from "@style-guide/color"
import { css } from "styled-components"

const shadow: ThemeFunction = () => css`
    ${styleGuide.text.base}

    display: flex;
    height: fit-content;
    width: fit-content;
    align-items: center;
    background-color: ${color.carbonAlpha60};
    font-family: Play, sans-serif;
    color: ${color.whiteAlpha94};
    padding: ${pxToRem(8)};
    border-radius: ${pxToRem(5)};
    gap: ${pxToRem(4)};
    box-shadow: ${pxToRem(3)} ${pxToRem(3)} ${pxToRem(4)} ${color.blackAlpha25};

    transition-property: box-shadow, transform, background-color;
    transition-timing-function: ease-out, ease-out, ease-out;
    transition-duration: 130ms, 130ms, 130ms;

    &:active {
        box-shadow: 0 0 0 ${color.blackAlpha25};
        transform: scale(0.95);
    }

    &:hover {
        background-color: ${color.carbonAlpha80};
    }
`

export const shadowThemes: Map<
    ButtonTheme, ThemeFunction
> = new Map ([
    ["shadow", shadow]
])
