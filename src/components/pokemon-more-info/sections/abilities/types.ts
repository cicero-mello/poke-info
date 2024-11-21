import { GetAbilityOfPokemonResponse } from "@api"

export interface AbilitiesSectionProps
extends GetAbilityOfPokemonResponse {
    pokemonName: string
}
