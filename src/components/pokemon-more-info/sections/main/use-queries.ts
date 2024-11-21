import { useQuery } from "@tanstack/react-query"
import { UseQueriesReponse } from "./types"
import { capitalize } from "@utils"
import * as api from "@api"

export const useMainSectionQueries = (
    pokemonId: number
): UseQueriesReponse => {
    const queryPokemon = useQuery({
        queryKey: ["getPokemon", pokemonId],
        queryFn: () => api.getPokemon({ idOrName: pokemonId+"" }),
    })

    const queryPokemonSpecies = useQuery({
        queryKey: ["getPokemonSpecies", pokemonId],
        queryFn: () => api.getPokemonSpecies({ idOrName: pokemonId+"" }),
    })

    return {
        isLoading: queryPokemon.isLoading || queryPokemonSpecies.isLoading,
        data: {
            pokemonType: queryPokemon.data?.types[0] ?? "normal",
            description: queryPokemonSpecies.data?.description ?? "",
            abilities: queryPokemon.data?.abilities ?? [],
            weight: queryPokemon.data?.kgWeight ?? 0,
            height: queryPokemon.data?.mHeight ?? 0,
            genera: queryPokemonSpecies.data?.genera ?? "",
            shape: capitalize(queryPokemonSpecies.data?.shape.name) ?? "",
            habitat: queryPokemonSpecies.data?.habitat?.name ?? "",
            eggGroups: queryPokemonSpecies.data?.eggGroups.map(
                eggGroup => capitalize(eggGroup.name)
            ).join(", ") ?? ""
        }
    }
}
