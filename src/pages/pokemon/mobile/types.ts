import { PokeApi } from "@types"

export interface MobileProps {
    pokemonMainType: PokeApi.PokemonType
}

export type AnimationType = "init" | "none" | "returning"
