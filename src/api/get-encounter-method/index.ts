import * as T from "./types"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/encounter-method/"

export const getEncounterMethod = async ({
    idOrName
}: T.GetEncounterMethodParams): Promise<T.GetEncounterMethodResponse> => {
    const { data } = await axios.get<T.GetEncounterMethodApiResponse>(
        url + idOrName
    )

    const name = data.names.find(
        (name) => name.language.name === "en"
    )?.name ?? data.name ?? ""

    return { name }
}
