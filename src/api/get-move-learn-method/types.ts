import { PokeApi } from "@types"

export interface GetMoveLearnMethodParams {
    idOrName: string
}

export type GetMoveLearnMethodApiResponse = PokeApi.MoveLearnMethod

export interface GetMoveLearnMethodResponse {
    name: string
    description: string
    id: number
}
