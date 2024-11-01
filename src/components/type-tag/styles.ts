import styled, { css } from "styled-components"
import { TypeTagSize } from "./types"
import { PokeApi } from "@types"
import { pxToRem, styleGuide } from "@style-guide"

export const Component = styled.div.attrs({
    className: "type-tag"
})<{ $pokemonType: PokeApi.PokemonType, $size?: TypeTagSize }>`
${({ $pokemonType, $size }) => css`

    background-color:
        ${styleGuide.color[$pokemonType as keyof typeof styleGuide.color]}
    ;

    text-align: center;
    font-weight: bold;
    white-space: nowrap;
    height: fit-content;
    width: ${pxToRem("92px")};
    padding: ${pxToRem("7px")} 0;
    border-radius: ${pxToRem(`8px`)};


    ${$size == "small" && css`
        ${styleGuide.text.sm}
        padding: ${pxToRem("5px")} 0;
        width: ${pxToRem("78px")};
    `}
`}`
