import { CustomPokemonEvolution } from "@components/evolution/types"

export interface EvolutionItemProps
extends CustomPokemonEvolution {
    onPixelArtLoad?: () => void | Promise<void>
}
