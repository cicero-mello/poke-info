import { PokeApi } from "@types"

export interface GetPokemonParams {
    idOrName: string
}

export type GetPokemonApiResponse = PokeApi.Pokemon

export interface BaseStat {
    name: PokeApi.StatName
    value: number
}

export interface Ability {
    name: string
    id: number
    isHidden: boolean
    slot: number
}

export interface GetPokemonResponse {
    id: number
    name: string
    baseStats: BaseStat[]
    imageUrl: string
    pixelArtUrl: string
    types: PokeApi.PokemonType[]
    abilities: Ability[]
    mHeight: number
    kgWeight: number
    specieId: number
}
