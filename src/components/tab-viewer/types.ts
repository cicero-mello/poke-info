import { PokeApi } from "@types"
import { JSX } from "preact"

export interface TabViewerProps {
    tabNames: string[]
    tabPanels: JSX.Element[]
    pokemonType: PokeApi.PokemonType
}
