import { PokeApi } from "@types"

export interface GetEncounterMethodParams {
    idOrName: number | string
}

export type GetEncounterMethodApiResponse = PokeApi.EncounterMethod

export interface GetEncounterMethodResponse {
    name: string
}
