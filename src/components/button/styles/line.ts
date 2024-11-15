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

const linePokemon: ThemeFunction = ($emphasis, $pokemonType) => css`
    ${line($emphasis)}

    font-size: 1.375rem;
    line-height: 1.75rem;
    white-space: nowrap;

    color: white;

    justify-content: center;

    &::before {
        transition: ${styleGuide.transitionTime.medium} ease-in-out;
    }

    transition-property: opacity, transform;
    transition-duration: ${styleGuide.transitionTime.mediumSlow};
    transition-timing-function: ease-out;

    ${!$emphasis && css`
        opacity: 0.8;
        transform: scale(0.8);
    `}

    ${$emphasis && css`
        &::before {
            height: 2px;
            border-radius: 4px;
            background-color:
                ${styleGuide.getCardColors($pokemonType ?? "normal").border}
            ;
        }
    `}
`

export const lineThemes: Map<
    ButtonTheme, ThemeFunction
> = new Map ([
    ["lineGray", lineGray],
    ["lineWhite", lineWhite],
    ["linePokemon", linePokemon]
])
