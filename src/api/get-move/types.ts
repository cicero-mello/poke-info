import { PokeApi } from "@types"

export interface GetMoveParams {
    idOrName: string
    versionGroupId?: number
}

export type MoveApiResponse = PokeApi.Move

export interface MoveResponse {
    name: string
    description: string
    versionGroupIdAdditionalDescription?: string
    accuracy: number | null
    pp: number
    power: number | null
    type: PokeApi.PokemonType
    damageClass: PokeApi.DamageClassName
    targetId: number
}
