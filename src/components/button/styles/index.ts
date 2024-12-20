import styled from "styled-components"
import { StyledProps } from "../types"

import { lineThemes } from "./line"
import { boldThemes } from "./bold"
import { bigThemes } from "./big"

const buttonThemes = new Map([
    ...lineThemes,
    ...boldThemes,
    ...bigThemes
])

export const StyledButton = styled.button.attrs({
    className: "styled-button"
})<StyledProps>`
    ${({ $theme, $emphasis, $pokemonType }) => {
        if(!$theme) return
        const theme = buttonThemes.get($theme)
        if(theme) return theme($emphasis, $pokemonType)
    }}
`

export const StyledAnchor = styled.a.attrs({
    className: "styled-anchor"
})<StyledProps>`
    ${({ $theme, $emphasis, $pokemonType }) => {
        if(!$theme) return
        const theme = buttonThemes.get($theme)
        if(theme) return theme($emphasis, $pokemonType)
    }}
`
