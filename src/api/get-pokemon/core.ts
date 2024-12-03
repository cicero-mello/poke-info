import { MoveId, VersionGroupId } from "./types"
import { extractIdFromUrl } from "@utils"
import { PokeApi } from "@types"

export const moveIdsPerVersionGroupId = (
    moves: PokeApi.Move[]
): Map<VersionGroupId, MoveId[]> => {
    const result = new Map<VersionGroupId, MoveId[]>()

    moves.forEach(move => {
        const moveId = extractIdFromUrl(move.move.url)

        move.version_group_details.forEach(detail => {
            const versionGroupId = extractIdFromUrl(
                detail.version_group.url
            )

            if(!result.has(versionGroupId)){
                result.set(versionGroupId, [])
            }

            const movesArray = result.get(versionGroupId)!
            movesArray.push(moveId)
        })
    })

    return result
}
