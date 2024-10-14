import { GetPokemonParams } from "./types"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/pokemon/"

export const getPokemon = async ({
    id
}: GetPokemonParams): Promise<any> => {
    const { data } = await axios.get<any>(
        url + id
    )

    return data
}
