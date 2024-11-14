import { PokeApi } from "@types"

export interface PokemonLayoutProps {
    pokemonId: number
    reverseAnimation?: boolean
    beforeReturnPokedex?: () => Promise<void>
}

export interface StyledComponentProps {
    $previewMode: boolean,
    $reverseAnimation: boolean,
    $removePointerEvents: boolean
}

export interface StyledDownAreaProps {
    $pokemonType: PokeApi.PokemonType,
    $previewMode: boolean,
    $reverseAnimation: boolean
}
