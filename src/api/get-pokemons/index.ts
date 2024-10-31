import { GetPokemonsApiResponse, GetPokemonsParams, GetPokemonsResponse } from "./types"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/pokemon"

const extractIdFromUrl = (url: string): number => {
    const match = url.match(/\/(\d+)\/$/)
    return match ? Number(match[1]) : 0
}

export const getPokemons = async ({
    page, limit = 20
}: GetPokemonsParams): Promise<GetPokemonsResponse[]> => {
    const urlSearchParams = new URLSearchParams({
        offset: (page * limit).toString(),
        limit: limit.toString()
    }).toString()

    const { data } = await axios.get<GetPokemonsApiResponse>(
        url + "?" + urlSearchParams
    )

    return data.results.map(pokemon => ({
        pokemonName: pokemon.name,
        pokemonId: extractIdFromUrl(pokemon.url)
    }))
}
