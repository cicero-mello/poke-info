import { useQueries, useQuery } from "@tanstack/react-query"
import { EvolutionQueryData } from "./types"
import * as api from "@api"

export const useEvolutionQueries = (
    pokemonId: number
): EvolutionQueryData | undefined => {
    const pokemon = useQuery({
        queryKey: ["getPokemon", pokemonId],
        queryFn: () => api.getPokemon({ idOrName: pokemonId+"" })
    })

    const specie = useQuery({
        queryKey: ["getPokemonSpecies", pokemon.data?.specieId],
        queryFn: () => api.getPokemonSpecies({
            idOrName: pokemon.data ? pokemon.data.specieId+"" : ""
        }),
        enabled: !!pokemon?.data
    })

    const evolution = useQuery({
        queryKey: ["getPokemonSpecies", specie.data?.evolutionChainId],
        queryFn: () => api.getEvolution({
            evolutionChainId: specie.data?.evolutionChainId ?? 0
        }),
        enabled: !!specie?.data
    })

    const specieIds = !evolution.data ? [] : evolution.data?.pokemons.map((item) => item.specieId)

    const pokemonsToGetPixelArt = useQueries({
        queries: specieIds.map((pokemonId) => ({
            queryKey: ["getPokemon", pokemonId],
            queryFn: () => api.getPokemon({ idOrName: pokemonId+"" }),
            enabled: specieIds.length > 0
        }))
    })

    const dataNotReady = (
        !evolution.data
        || evolution.data.pokemons.length === 0
        || pokemonsToGetPixelArt.length === 0
    )

    if(dataNotReady) return

    return {
        pokemons: evolution.data.pokemons.map((item) => ({
            ...item,
            pixelArtUrl: pokemonsToGetPixelArt.find(pokemonQuery => (
                pokemonQuery.data?.id === item.specieId
            ))?.data?.pixelArtUrl ?? ""
        }))
    }
}
