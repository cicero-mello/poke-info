import { useQueries } from "@tanstack/react-query"
import { removeDuplicatesById } from "@utils"
import { UseQueriesResponse } from "./types"
import * as api from "@api"

export const useMovesSectionQueries = (
    moves: api.Move[],
    versionGroupId: number
): UseQueriesResponse => {
    const movesQueries = useQueries({
        queries: moves.map((move) => ({
            queryKey: ["getMove", move.id, versionGroupId],
            queryFn: () => api.getMove({ idOrName: move.id + "", versionGroupId })
        }))
    })

    const movesLearnMethodsQueries = useQueries({
        queries: moves.map((move) => ({
            queryKey: ["getMoveLearnMethod", move.learnMethod.id],
            queryFn: () => api.getMoveLearnMethod({ idOrName: move.learnMethod.id + "" })
        }))
    })

    const movesTargetsQueries = useQueries({
        queries: movesQueries.map((move) => ({
            queryKey: ["getMoveTarget", move.data?.targetId],
            queryFn: () => api.getMoveTarget({ idOrName: move.data?.targetId + "" }),
            enabled: !!movesQueries.every(({ data }) => !!data)
        }))
    })

    const isLoading = (
        movesQueries.some(({ data }) => !data)
        || movesLearnMethodsQueries.some(({ data }) => !data)
        || movesTargetsQueries.some(({ data }) => !data)
    )

    const movesResponse = isLoading ? [] : movesQueries.map(({ data: move }) => {
        const learnMethodId = moves.find(({ id }) => id === move!.id)!.learnMethod.id

        const learnMethod = movesLearnMethodsQueries.find(
            ({ data }) => data!.id === learnMethodId
        )!.data

        const learnedAtLevel = moves.find(({ id }) => id === move!.id)!.learnMethod.level

        const moveTargetName = movesTargetsQueries.find(
            ({ data: target }) => target!.id === move!.targetId
        )!.data!.moveTargetName

        return {
            id: move!.id,
            accuracy: move!.accuracy,
            damageClass: move!.damageClass,
            description: move!.description,
            versionGroupIdAdditionalDescription: move!.versionGroupIdAdditionalDescription,
            name: move!.name,
            power: move!.power,
            pp: move!.pp,
            type: move!.type,
            targetId: move!.targetId,
            moveTargetName: moveTargetName,
            learnMethod: {
                description: learnMethod!.description,
                id: learnMethod!.id,
                name: learnMethod!.name,
                learnedAtLevel: learnedAtLevel
            }
        }
    })

    return {
        isLoading: isLoading,
        moves: removeDuplicatesById(movesResponse)
    }
}
