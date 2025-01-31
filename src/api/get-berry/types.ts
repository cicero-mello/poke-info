import { PokeApi } from "@types"

export interface GetBerryParams {
    idOrName: string | number
}

export type GetBerryApiResponse = PokeApi.Berry

export interface GetBerryResponse {
    id: number
    itemId: number
    name: string
    naturalGiftType: string
    smoothness: number
    firmness: string
    size: number
    naturalGiftPower: number
    soilDryness: number
    grownTime: number
    maxHarvest: number
    flavors: Flavor[]
}

export interface Flavor {
    name: PokeApi.FlavorName
    potency: number
}
