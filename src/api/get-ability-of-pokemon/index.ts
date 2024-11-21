import { GetAbilityOfPokemonApiResponse, GetAbilityOfPokemonParams, GetAbilityOfPokemonResponse } from "./types"
import { capitalize, extractIdFromUrl } from "@utils"
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
        name: data.name,
        isHidden: isHidden,
        description: data.effect_entries.find(
            description => description.language.name === "en"
        )?.effect ?? "",
        otherPokemonsWithThisAbility: otherPokemonsWithThisAbility.map(pokemonInfo => ({
            name: pokemonInfo.pokemon.name,
            id: extractIdFromUrl(pokemonInfo.pokemon.url)
        }))
    }
}
