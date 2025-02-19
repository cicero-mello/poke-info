import { transitionTime } from "@style-guide/transition-time"
import { ButtonTheme, ThemeFunction } from "../types"
import { pxToRem, styleGuide } from "@style-guide"
import { color } from "@style-guide/color"
import { css } from "styled-components"

const smallTag: ThemeFunction = () => css`
    ${styleGuide.text.xs}
    background-color: ${color.platinum};
    color: ${color.carbon};
    height: fit-content;
    width: fit-content;
    padding: ${pxToRem(1)} ${pxToRem(6)};
    border-radius: ${pxToRem(4)};
    user-select: none;

    transition-property: color, background-color, opacity;
    transition-timing-function: linear, linear, linear;
    transition-duration: ${transitionTime.fast}, ${transitionTime.fast}, ${transitionTime.fast};

    &:hover {
        color: black;
        background-color: ${color.mistGray};
    }
`

export const tagThemes: Map<
    ButtonTheme, ThemeFunction
> = new Map ([
    ["smallTag", smallTag]
])
