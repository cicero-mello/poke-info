import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"
import { TypeTagSize } from "./types"
import { PokeApi } from "@types"

export const Component = styled.div.attrs({
    className: "type-tag"
})<{ $pokemonType: PokeApi.PokemonType, $size?: TypeTagSize, $cleanMode?: boolean }>`
${({ $pokemonType, $size, $cleanMode }) => css`

    background-color:
        ${styleGuide.color[$pokemonType as keyof typeof styleGuide.color]}
    ;

    text-align: center;
    font-weight: bold;
    white-space: nowrap;
    height: fit-content;
    width: ${pxToRem(92)};
    padding: ${pxToRem(7)} 0;
    border-radius: ${pxToRem(8)};
    color: ${styleGuide.color.pearlGray};

    ${$size == "small" && css`
        ${styleGuide.text.sm}
        padding: ${pxToRem(5)} 0;
        width: ${pxToRem(78)};
    `}

    ${$size == "smaller" && css`
        ${styleGuide.text.xs}
        padding: ${pxToRem(5)} 0;
        width: ${pxToRem(64)};
    `}

    ${$cleanMode && css`
        ${styleGuide.text.xs}
        width: fit-content;
        background-color: unset;
        padding: ${pxToRem(3)} ${pxToRem(10)};
        color: ${styleGuide.color.pearlGray};
        border: ${pxToRem(2)} solid ${styleGuide.color.whiteAlpha49};
    `}
`}`
