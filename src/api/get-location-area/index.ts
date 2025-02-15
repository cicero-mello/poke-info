import { capitalizeApiName } from "@utils"
import * as T from "./types"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/location-area/"

export const getLocationArea = async ({
    idOrName
}: T.GetLocationAreaParams): Promise<T.GetLocationAreaResponse> => {
    const { data } = await axios.get<T.GetLocationAreaApiResponse>(url + idOrName)

    const name = data.names.find(
        (name) => name.language.name === "en"
    )?.name ?? capitalizeApiName(data.name) ?? ""

    return { name }
}
