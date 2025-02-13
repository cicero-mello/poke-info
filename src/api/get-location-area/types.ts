import { PokeApi } from "@types"

export interface GetLocationAreaParams {
    idOrName: number | string
}

export type GetLocationAreaApiResponse = PokeApi.LocationArea

export interface GetLocationAreaResponse {
    name: string
}
