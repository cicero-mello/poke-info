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
    transition: ${transitionTime.fast} linear;
    user-select: none;

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
