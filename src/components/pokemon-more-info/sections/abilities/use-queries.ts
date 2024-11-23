import { useQuery } from "@tanstack/react-query"
import { UseQueriesResponse } from "./types"
import * as api from "@api"

export const useAbilitySectionQueries = (
    pokemonId: number, abilityId: number
): UseQueriesResponse => {
    const queryPokemon = useQuery({
        queryKey: ["getPokemon", pokemonId],
        queryFn: () => api.getPokemon({ idOrName: pokemonId+"" }),
    })

    const { data, isLoading } = useQuery({
        queryKey: ["getAbility", abilityId],
        queryFn: () => api.getAbility({ idOrName: abilityId+""}),
    })

    const isHidden = !!data?.pokemonsWithThisAbility.find(pokemonInfo =>
        pokemonInfo.id === pokemonId
    )?.isHidden

    const otherPokemonsWithThisAbility = data?.pokemonsWithThisAbility.filter(
        pokemon => pokemon.id != pokemonId
    ) ?? []

    return {
        isLoading: isLoading,
        data: {
            isHidden: isHidden,
            name: data?.name ?? "",
            description: data?.description ?? "",
            pokemonName: queryPokemon.data?.name ?? "",
            otherPokemonsWithThisAbility: otherPokemonsWithThisAbility
        }
    }
}
