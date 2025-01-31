import { numbPxToRem, styleGuide } from "@style-guide"
import { ButtonTheme, ThemeFunction } from "../types"
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
    padding: ${numbPxToRem(8)};
    border-radius: ${numbPxToRem(5)};
    gap: ${numbPxToRem(4)};
    transition: 130ms ease-out;
    box-shadow: ${numbPxToRem(3)} ${numbPxToRem(3)} ${numbPxToRem(4)} ${color.blackAlpha25};

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
