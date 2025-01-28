import { PokeApi } from "@types"

export type TypeTagSize  = "small" | "big" | "smaller"

export interface TypeTagProps {
    pokemonType: PokeApi.PokemonType
    size?: TypeTagSize
    cleanMode?: boolean
}
