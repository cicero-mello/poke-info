export interface PokemonPixelArtProps {
    imageUrl: string
    pokemonId: number
    alt?: string
    onLoad?: () => void | Promise<void>
}
