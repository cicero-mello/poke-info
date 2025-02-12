import { PokeApi } from "@types"

export interface GetPokemonLocationAreasParams {
    idOrName: string | number
}

export type GetPokemonLocationAreasApiResponse = PokeApi.PokemonLocationArea[]

export interface GetPokemonLocationAreasResponse {
    encountersPerVersionId: Map<number, Encounter[]>
}

export interface Encounter {
    areaId: number
    methods: Method[]
}

export interface Method {
    id: number
    conditionIds: number[]
    chance: number
    maxLevel: number
    minLevel: number
}
