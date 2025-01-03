import { capitalizeApiName, extractIdFromUrl, removeEscapeSequences } from "@utils"
import { GetMoveParams, MoveApiResponse, MoveResponse } from "./types"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/move/"

export const getMove = async ({
    idOrName, versionGroupId
}: GetMoveParams): Promise<MoveResponse> => {

    const { data } = await axios.get<MoveApiResponse>(
        url + idOrName
    )

    const pastValue = data.past_values.find(
        ({version_group}) => extractIdFromUrl(version_group.url) === versionGroupId
    )

    const effectChange = data.effect_changes.find(
        ({version_group}) => extractIdFromUrl(version_group.url) === versionGroupId
    )

    const effectEntry = (
        data.effect_entries.find(({language}) => language.name === "en")
    )!

    const additionalEffectEntryOfThisVersionGroup = (
        !effectChange ? undefined :
        effectChange.effect_entries.find(({language}) => language.name === "en")!
    )

    const name = (
        data.names.find(({language}) => language.name === "en")!.name
        ?? capitalizeApiName(data.name)
    )

    return {
        name: name,
        description: removeEscapeSequences(effectEntry.effect),
        versionGroupIdAdditionalDescription: additionalEffectEntryOfThisVersionGroup?.effect,
        accuracy: pastValue?.accuracy ?? data.accuracy,
        pp: pastValue?.pp ?? data.pp,
        power: pastValue?.power ?? data.power,
        type: pastValue?.type?.name ?? data.type.name,
        damageClass: data.damage_class.name,
        targetId: extractIdFromUrl(data.target.url)
    }
}
