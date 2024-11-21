import { PokeApi } from "@types"

export interface GetAbilityParams {
    idOrName: string
}

export type GetAbilityApiResponse = PokeApi.FullAbility

export interface GetAbilityResponse {
    name: string
    description: string
    pokemonsWithThisAbility: {
        name: string
        id: number
        isHidden: boolean
    }[]
}
