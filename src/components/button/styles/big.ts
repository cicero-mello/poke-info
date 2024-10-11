import { ButtonTheme, ThemeFunction } from "../types"
import { pxToRem, styleGuide } from "@style-guide"
import { css } from "styled-components"

const bigBlue: ThemeFunction = ($emphasis) => css`
    ${styleGuide.text["2xl"]}

    font-family: Quantico, sans-serif;
    color: white;
    text-align: center;
    background-color: ${styleGuide.color.skyBlueAlpha92};

    padding: ${pxToRem("16px")} ${pxToRem("20px")};
    border-radius: ${pxToRem("12px")};
    border: ${pxToRem("2px")} solid ${styleGuide.color.whiteAlpha70};

    transition-property: background-color;
    transition-duration: ${styleGuide.transitionTime.fast};

    &:hover, &:focus {
        background-color: ${styleGuide.color.royalBlueAlpha92};
    }

    ${$emphasis && css`
        font-weight: 700;
    `}

    @media(max-width: ${styleGuide.dimensions.mobileWidth}){
        ${styleGuide.text.base}
        padding: ${pxToRem("12px")} ${pxToRem("16px")};
    }
`

export const bigThemes: Map<
    ButtonTheme, ThemeFunction
> = new Map ([
    ["bigBlue", bigBlue]
])
