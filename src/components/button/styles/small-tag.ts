import { transitionTime } from "@style-guide/transition-time"
import { numbPxToRem, styleGuide } from "@style-guide"
import { ButtonTheme, ThemeFunction } from "../types"
import { color } from "@style-guide/color"
import { css } from "styled-components"

const smallTag: ThemeFunction = () => css`
    ${styleGuide.text.xs}
    background-color: ${color.platinum};
    color: ${color.carbon};
    height: fit-content;
    width: fit-content;
    padding: ${numbPxToRem(1)} ${numbPxToRem(6)};
    border-radius: ${numbPxToRem(4)};
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
