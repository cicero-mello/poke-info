import { PokeApi } from "@types"

export interface GetPokemonParams {
    id: string
}

export type GetPokemonApiResponse = PokeApi.Pokemon

export interface BaseStat {
    name: PokeApi.StatName
    value: number
}

export interface GetPokemonResponse {
    id: number
    name: string
    baseStats: BaseStat[]
    imageUrl: string
    types: PokeApi.PokemonType[]
}
