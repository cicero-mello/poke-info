import { Dispatch, StateUpdater } from "preact/hooks"

export interface PokemonSectionProps {
    pokemonId: number
    setPokemonId: Dispatch<StateUpdater<number>>
}
