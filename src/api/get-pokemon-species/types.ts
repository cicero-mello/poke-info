import { NameAndNumberId, PokeApi } from "@types"

export interface GetPokemonSpeciesParams {
    idOrName: string
}

export interface GetPokemonSpeciesResponse {
    description: string
    genera: string
    shape: NameAndNumberId
    eggGroups: NameAndNumberId[]
    habitat?: NameAndNumberId
    evolutionChainId: number
}

export type GetPokemonSpeciesApiResponse = (
    PokeApi.PokemonSpecies
)
