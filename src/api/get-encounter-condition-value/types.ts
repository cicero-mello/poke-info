import { PokeApi } from "@types"

export interface GetEncounterConditionValueParams {
    idOrName: number | string
}

export type GetEncounterConditionValueApiResponse = PokeApi.EncounterConditionValue

export interface GetEncounterConditionValueResponse {
    name: string
}
