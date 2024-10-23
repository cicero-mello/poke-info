import { GetPokemonsResponse } from "@api"
import { PokeCardMode } from "@components/poke-card/types"

export interface VirtualizedListProps {
    pokemons: GetPokemonsResponse[]
    cardMode: PokeCardMode
}
