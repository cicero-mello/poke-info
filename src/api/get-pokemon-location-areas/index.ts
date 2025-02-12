import { extractIdFromUrl } from "@utils"
import * as T from "./types"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/pokemon/"

export const getPokemonLocationAreas = async ({
    idOrName
}: T.GetPokemonLocationAreasParams)
: Promise<T.GetPokemonLocationAreasResponse> => {

    const { data } = await axios.get<T.GetPokemonLocationAreasApiResponse>(
        url + `${idOrName}/encounters`
    )

    const encountersPerVersionId = new Map<number, T.Encounter[]>()

    const setKeyInMap = (versionId: number) => {
        encountersPerVersionId.set(versionId, [])
    }

    data.forEach(location => {
        const areaId = extractIdFromUrl(location.location_area.url)

        location.version_details.forEach(versionDetail => {
            const versionId = extractIdFromUrl(versionDetail.version.url)
            const encounter: T.Encounter = {
                areaId,
                methods: versionDetail.encounter_details.map(detail => ({
                    id: extractIdFromUrl(detail.method.url),
                    chance: detail.chance,
                    maxLevel: detail.max_level,
                    minLevel: detail.min_level,
                    conditionIds: detail.condition_values.map(
                        (condition) => extractIdFromUrl(condition.url)
                    )
                }))
            }

            const mapKeyExists = encountersPerVersionId.has(versionId)
            if(!mapKeyExists) setKeyInMap(versionId)

            encountersPerVersionId.get(versionId)!.push(encounter)
        })
    })

    return {
        encountersPerVersionId
    }
}
