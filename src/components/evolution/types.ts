import { PokemonEvolution } from "@api"

export interface EvolutionProps {
    pokemonId: number
}

export interface EvolutionQueryData {
    pokemons: CustomPokemonEvolution[]
}

export interface CustomPokemonEvolution extends PokemonEvolution {
    pixelArtUrl: string
}
