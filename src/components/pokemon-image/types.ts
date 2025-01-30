export interface PokemonImageProps {
    pokemonId: number
    imageUrl?: string | null
    alt?: string
    onLoad?: () => void
}
