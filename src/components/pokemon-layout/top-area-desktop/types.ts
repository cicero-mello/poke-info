import { GetPokemonResponse } from "@api"
import { Dispatch, StateUpdater } from "preact/hooks"

export interface TopAreaDesktopProps {
    pokemonId: number
    setRemovePointerEvents: Dispatch<StateUpdater<boolean>>
    beforeReturnPokedex?: () => Promise<void>
    pokemonData?: GetPokemonResponse
    onLoadImage?: () => void
}
