import { GetBerriesApiResponse, GetBerriesResponse } from "./types"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/berry/"

export const getBerries = async (): Promise<GetBerriesResponse> => {
    const { data } = await axios.get<GetBerriesApiResponse>(url)

    return {
        total: data.count
    }
}
