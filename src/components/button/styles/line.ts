import { css } from "styled-components"
import { styleGuide } from "@style-guide"
import { ButtonTheme, ThemeFunction } from "../types"

const line: ThemeFunction = ($emphasis) => css`
    ${styleGuide.text.lg}
    font-family: Play, sans-serif;
    transition-property: color;
    transition-duration: ${styleGuide.transitionTime.fast};
    position: relative;

    &::before {
        content: "";
        position: absolute;
        transition: ${styleGuide.transitionTime.slow};
        height: 1px;
        width: 0%;
        bottom: 0;
    }

    ${$emphasis && css`
        &::before {
            width: 100%;
        }
    `}
`

const lineGray: ThemeFunction = ($emphasis) => css`
    ${line($emphasis)}

    color: ${styleGuide.color.stoneGray};

    ${$emphasis && css`
        color: ${styleGuide.color.skyBlue};
        &::before {
            background-color: ${styleGuide.color.skyBlue};
        }
    `}
`

const lineWhite: ThemeFunction = ($emphasis) => css`
    ${line($emphasis)}

    color: ${styleGuide.color.cloudGrayAlpha92};

    ${$emphasis && css`
        color: ${styleGuide.color.cornflower};
        &::before {
            background-color: ${styleGuide.color.cornflower};
        }
    `}
`

export const lineThemes: Map<
    ButtonTheme, ThemeFunction
> = new Map ([
    ["lineGray", lineGray],
    ["lineWhite", lineWhite]
])
