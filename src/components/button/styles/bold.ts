import { css } from "styled-components"
import { styleGuide } from "@style-guide"
import { ButtonTheme, ThemeFunction } from "../types"

const boldWhite: ThemeFunction = ($emphasis) => css`
    ${styleGuide.text.lg}

    font-family: Play, sans-serif;
    color: white;

    ${$emphasis && css`
        font-weight: 700;
    `}
`

export const boldThemes: Map<
    ButtonTheme, ThemeFunction
> = new Map ([
    ["boldWhite", boldWhite]
])
