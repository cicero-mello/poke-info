import { PokeApi } from "@types"
import { HTMLAttributes, RefObject } from "preact/compat"
import { RuleSet } from "styled-components"

export type ButtonTheme = (
    "lineGray" | "lineWhite" | "linePokemon" |
    "boldWhite" | "bigBlue" | "shadow" | "smallTag"
)

export interface ButtonProps extends Omit<
    HTMLAttributes<HTMLElement>,
    "className" | "onContextMenu" | "onKeyDown" | "ref"
>{
    theme?: ButtonTheme
    emphasis?: boolean
    pokemonType?: PokeApi.PokemonType
    preventNavOnClick?: boolean
    navigate?: {
        path: string,
        transition?: boolean
    }
    componentRef?: RefObject<HTMLButtonElement>
}

export interface StyledProps {
    $theme?: ButtonTheme
    $emphasis?: boolean
    $pokemonType?: PokeApi.PokemonType
}

export type ThemeFunction = (
    $emphasis?: boolean,
    $pokemonType?: PokeApi.PokemonType
) => RuleSet<object>
