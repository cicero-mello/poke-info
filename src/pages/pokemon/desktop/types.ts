import { PokeApi } from "@types"

export interface DesktopProps {
    pokemonMainType: PokeApi.PokemonType
}

export type AnimationType = "init" | "none" | "returning"
