import * as T from "./types"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/encounter-condition-value/"

export const getEncounterConditionValue = async ({
    idOrName
}: T.GetEncounterConditionValueParams): Promise<T.GetEncounterConditionValueResponse> => {
    const { data } = await axios.get<T.GetEncounterConditionValueApiResponse>(
        url + idOrName
    )

    const name = data.names.find(
        (name) => name.language.name === "en"
    )?.name ?? data.name ?? ""

    return { name }
}
