import { css } from "styled-components"
import { styleGuide } from "@style-guide"
import { ButtonTheme, ThemeFunction } from "../types"

const lineGray: ThemeFunction = ($emphasis) => css`
    ${styleGuide.text["2xl"]}

    font-family: Play, sans-serif;
    color: ${styleGuide.color.stoneGray};

    ${$emphasis && css`
        color: ${styleGuide.color.skyBlue};
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 8px;
        text-decoration-color: ${styleGuide.color.skyBlue};
    `}
`

const lineWhite: ThemeFunction = ($emphasis) => css`
    ${styleGuide.text["2xl"]}

    font-family: Play, sans-serif;
    color: ${styleGuide.color.cloudGray};

    ${$emphasis && css`
        color: ${styleGuide.color.cornflower};
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 8px;
        text-decoration-color: ${styleGuide.color.cornflower};
    `}
`

export const lineThemes: Map<
    ButtonTheme, ThemeFunction
> = new Map ([
    ["lineGray", lineGray],
    ["lineWhite", lineWhite]
])
