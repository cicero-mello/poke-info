import { GetMoveLearnMethodResponse, GetMoveTargetResponse, MoveResponse } from "@api"

export interface LearnMethod extends GetMoveLearnMethodResponse{
    learnedAtLevel?: number
}

export interface Move extends MoveResponse, GetMoveTargetResponse {
    learnMethod: LearnMethod
}

export interface MovesSectionProps {
    versionName: string
    moves: Move[]
}

export interface UseQueriesResponse {
    isLoading: boolean,
    moves: Move[]
}
