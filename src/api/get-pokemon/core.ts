import { capitalizeApiName, extractIdFromUrl } from "@utils"
import { Move, VersionGroupId } from "./types"
import { PokeApi } from "@types"

export const moveIdsPerVersionGroupId = (
    moves: PokeApi.Move[]
): Map<VersionGroupId, Move[]> => {
    const result = new Map<VersionGroupId, Move[]>()

    moves.forEach(move => {
        const moveId = extractIdFromUrl(move.move.url)
        const moveName = capitalizeApiName(move.move.name)

        move.version_group_details.forEach(detail => {
            const versionGroupId = extractIdFromUrl(
                detail.version_group.url
            )

            if(!result.has(versionGroupId)){
                result.set(versionGroupId, [])
            }

            const movesArray = result.get(versionGroupId)!
            movesArray.push({
                name: moveName,
                id:moveId,
                learnMethod: {
                    id: extractIdFromUrl(detail.move_learn_method.url),
                    name: capitalizeApiName(
                        detail.move_learn_method.name
                    ),
                    level: detail.level_learned_at != 0 ? detail.level_learned_at : undefined
                }
            })
        })
    })

    return result
}
