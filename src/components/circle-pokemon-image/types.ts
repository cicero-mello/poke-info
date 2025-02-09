import { PokeApi } from "@types"
import { RefObject } from "preact"

export interface CirclePokemonImageProps {
    url?: string
    type?: PokeApi.PokemonType
    pokemonName?: string
    componentRef?: RefObject<HTMLDivElement>
}

export interface CirclePokemonImageRef {
    loaded: () => Promise<void>
}
