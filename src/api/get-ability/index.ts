import { GetAbilityApiResponse, GetAbilityParams, GetAbilityResponse } from "./types"
import { capitalizeApiName, extractIdFromUrl } from "@utils"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/ability/"

export const getAbility = async ({
    idOrName
}: GetAbilityParams): Promise<GetAbilityResponse> => {
    const { data } = await axios.get<GetAbilityApiResponse>(
        url + idOrName
    )

    return {
        name: capitalizeApiName(data.name),
        description: data.effect_entries.find(
            description => description.language.name === "en"
        )?.effect ?? data.flavor_text_entries.find(
            description => description.language.name === "en"
        )?.flavor_text ?? "",
        pokemonsWithThisAbility: data.pokemon.map(pokemonInfo => ({
            name: capitalizeApiName(pokemonInfo.pokemon.name),
            id: extractIdFromUrl(pokemonInfo.pokemon.url),
            isHidden: pokemonInfo.is_hidden
        }))
    }
}
