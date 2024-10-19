import { PokeApi } from "@types"

export interface GetPokemonParams {
    id: string
}

export type GetPokemonApiResponse = PokeApi.Pokemon

export interface BaseStats {
    name: PokeApi.StatName
    value: number
}

export interface GetPokemonResponse {
    id: number
    name: string
    baseStats: BaseStats[]
    imageUrl: string
}
