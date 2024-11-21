import { PokeApi } from "@types"

export interface GetAbilityOfPokemonParams {
    idOrName: string
    pokemonId: number
}

export type GetAbilityOfPokemonApiResponse = PokeApi.FullAbility

export interface GetAbilityOfPokemonResponse {
    name: string
    description: string
    isHidden: boolean
    otherPokemonsWithThisAbility: {
        name: string
        id: number
    }[]
}
