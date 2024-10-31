import { GetPokemonParams, GetPokemonApiResponse, GetPokemonResponse } from "./types"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/pokemon/"

export const getPokemon = async ({
    idOrName
}: GetPokemonParams): Promise<GetPokemonResponse> => {
    const { data } = await axios.get<GetPokemonApiResponse>(
        url + idOrName
    )

    return {
        id: data.id,
        name: data.name,
        imageUrl: data.sprites.other?.["official-artwork"].front_default ?? "",
        types: data.types.map(type => type.type.name),
        baseStats: data.stats.map((stat) => ({
            name: stat.stat.name,
            value: stat.base_stat
        }))
    }
}
