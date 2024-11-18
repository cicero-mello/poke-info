import { Ability } from "@api"
import { PokeApi } from "@types"

export interface PokemonMoreInfoProps {
    pokemonId: number
}

export interface UseQueriesReponse {
    isLoading: boolean
    data: {
        description: string
        abilities: Ability[]
        weight: number
        height: number
        genera: string
        shape: string
        habitat: string
        eggGroups: string
        pokemonType: PokeApi.PokemonType
    }
}
