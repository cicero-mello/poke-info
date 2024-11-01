import { PokeApi } from "@types"

export type PokeCardMode = "Simple" | "Detailed"

export interface PokeCardProps {
    pokeId: number
    cardMode?: PokeCardMode
    onClick?: () => void
}

export interface StyledCardProps {
    $pokemonType?: PokeApi.PokemonType
    $cardMode?: PokeCardMode
}
