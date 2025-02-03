import { PokeApi } from "@types"

export type GetItemApiResponse = PokeApi.Item

export interface GetItemResponse {
    spriteUrl: string
    shortEffect: string
    description: string
    category?: string
    cost?: number
    flingPower?: number
    flingEffect?: string
    isHoldableActive?: boolean
}

export interface GetItemParams {
    idOrName: string | number
}
