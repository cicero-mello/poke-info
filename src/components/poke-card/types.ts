export type PokeCardMode = "simple" | "detailed"

export interface PokeCardProps {
    pokeId: string
    cardMode?: PokeCardMode
    onClick?: () => void
}
