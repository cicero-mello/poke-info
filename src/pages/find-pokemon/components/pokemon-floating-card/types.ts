export interface PokemonFloatingCardProps {
    pokemonId: number
    setPokemonId: (pokemonId: number) => void
    hideVersionFloatingCard: () => Promise<void>
    showVersionFloatingCard: () => Promise<void>
}
