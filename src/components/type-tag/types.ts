import { PokeApi } from "@types"

export type TypeTagSize  = "small" | "big"

export interface TypeTagProps {
    pokemonType: PokeApi.PokemonType
    size?: TypeTagSize
}
