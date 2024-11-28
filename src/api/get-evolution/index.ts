
import { GetEvolutionApiResponse, GetEvolutionParams, GetEvolutionResponse } from "./types"
import { convertDataToPokemonsEvolution } from "./core"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/evolution-chain/"

export const getEvolution = async ({
    evolutionChainId
}: GetEvolutionParams): Promise<GetEvolutionResponse> => {
    const { data } = await axios.get<GetEvolutionApiResponse>(
        url + evolutionChainId
    )

    return {
        pokemons: convertDataToPokemonsEvolution(data)
    }
}
