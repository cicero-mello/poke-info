import { useQuery } from "@tanstack/react-query"
import * as api from "@api"

export const useAbilitySectionQueries = (
    pokemonId: number, abilityId: number
) => {
    const { data, isLoading } = useQuery({
        queryKey: ["getAbilityOfPokemon", pokemonId, abilityId],
        queryFn: () => api.getAbilityOfPokemon({
            idOrName: abilityId+"",
            pokemonId: pokemonId
        }),
    })

    // TODO lance do is hidden deve ser feito aqui e não na função de api

    return {
        isLoading,
        data
    }
}
