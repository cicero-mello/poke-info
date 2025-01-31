import { PokeApi } from "@types"
import { HTMLAttributes } from "preact/compat"
import { RuleSet } from "styled-components"

export type ButtonTheme = (
    "lineGray" | "lineWhite" | "linePokemon" |
    "boldWhite" | "bigBlue" | "shadow"
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
