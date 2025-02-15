import { Dispatch, StateUpdater } from "preact/hooks"
import * as api from "@api"

export interface PokemonFloatingCardProps {
    pokemonId: number
    setPokemonId: Dispatch<StateUpdater<number>>
    setEncountersPerVersionId: Dispatch<StateUpdater<api.EncountersPerVersionId | undefined>>
    setChosenVersionId: Dispatch<StateUpdater<number>>
    hideVersionFloatingCard: () => Promise<void>
    showVersionFloatingCard: () => Promise<void>
    hideNoEncountersFloatingCard: () => Promise<void>
    showNoEncountersFloatingCard: () => Promise<void>
    hidePlacesFloatingCard: () => Promise<void>
}
