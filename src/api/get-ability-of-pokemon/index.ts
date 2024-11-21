import { GetAbilityOfPokemonApiResponse, GetAbilityOfPokemonParams, GetAbilityOfPokemonResponse } from "./types"
import { capitalize, capitalizeApiName, extractIdFromUrl } from "@utils"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/ability/"

export const getAbilityOfPokemon = async ({
    idOrName, pokemonId
}: GetAbilityOfPokemonParams): Promise<GetAbilityOfPokemonResponse> => {
    const { data } = await axios.get<GetAbilityOfPokemonApiResponse>(
        url + idOrName
    )

    const isHidden = data.pokemon.find(pokemonInfo =>
        extractIdFromUrl(pokemonInfo.pokemon.url) === pokemonId
    )?.is_hidden

    if(isHidden === undefined) throw new Error(
        `Pokémon nº ${pokemonId} doesn't have ${capitalize(data.name)} ability!`
    )

    const otherPokemonsWithThisAbility = data.pokemon.filter(
        pokemonInfo => extractIdFromUrl(
            pokemonInfo.pokemon.url
        ) != pokemonId
    )

    return {
        name: capitalizeApiName(data.name),
        isHidden: isHidden,
        description: data.effect_entries.find(
            description => description.language.name === "en"
        )?.effect ?? data.flavor_text_entries.find(
            description => description.language.name === "en"
        )?.flavor_text ?? "",
        otherPokemonsWithThisAbility: otherPokemonsWithThisAbility.map(pokemonInfo => ({
            name: capitalizeApiName(pokemonInfo.pokemon.name),
            id: extractIdFromUrl(pokemonInfo.pokemon.url)
        }))
    }
}
