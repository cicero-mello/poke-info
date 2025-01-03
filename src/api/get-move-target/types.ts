import { PokeApi } from "@types"

export interface GetMoveTargetParams {
    idOrName: string
}

export type GetMoveTargetApiResponse = PokeApi.MoveTarget

export interface GetMoveTargetResponse {
    moveTargetName: string
}
