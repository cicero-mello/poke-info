import { GetPokemonSpeciesParams, GetPokemonSpeciesResponse, GetPokemonSpeciesApiResponse } from "./types"
import { capitalize, extractIdFromUrl, removeEscapeSequences } from "@utils"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/pokemon-species/"

export const getPokemonSpecies = async ({
    idOrName
}: GetPokemonSpeciesParams): Promise<GetPokemonSpeciesResponse> => {
    const { data } = await axios.get<GetPokemonSpeciesApiResponse>(
        url + idOrName
    )

    return {
        description: removeEscapeSequences(
            data.flavor_text_entries.find(
                description => description.language.name === "en"
            )?.flavor_text ?? ""
        ),
        genera: data.genera.find(
            genera => genera.language.name === "en"
        )?.genus ?? "",
        shape: {
            name: data.shape.name,
            id: extractIdFromUrl(data.shape.url)
        },
        eggGroups: data.egg_groups.map((eggGroup) => ({
            name: eggGroup.name,
            id: extractIdFromUrl(eggGroup.url)
        })),
        habitat: data.habitat ? {
            name: data.habitat.name.split("-").map(text => capitalize(text)).join(" "),
            id: extractIdFromUrl(data.habitat.url)
        } : undefined
    }
}
