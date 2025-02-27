import { PokeApi } from "@types"

export interface PokemonLayoutProps {
    pokemonId: number
    reverseAnimation?: boolean
    beforeReturnPokedex?: () => Promise<void>
    isMobileMode?: boolean
}

export interface StyledComponentProps {
    $previewMode: boolean
    $reverseAnimation: boolean
    $removePointerEvents: boolean
    $prepareToChangePokemon: boolean
    $isMobileMode: boolean
}

export interface StyledDownAreaProps {
    $pokemonType: PokeApi.PokemonType
    $previewMode: boolean
    $reverseAnimation: boolean
    $isMobileMode: boolean
}

export interface StyledContent {
    $pokemonType: PokeApi.PokemonType
    $isMobileMode: boolean
}

export interface PokemonLayoutContextProps {
    changePokemon: (id: number) => Promise<void> | void
}
