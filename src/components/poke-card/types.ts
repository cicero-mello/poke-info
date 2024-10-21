import { PokeApi } from "@types"

export type PokeCardMode = "Simple" | "Detailed"

export interface PokeCardProps {
    pokeId: string
    cardMode?: PokeCardMode
    onClick?: () => void
}

export interface StyledCardProps {
    $pokemonType?: PokeApi.PokemonType
    $cardMode?: PokeCardMode
}
