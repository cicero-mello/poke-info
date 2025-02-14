import { Dispatch, StateUpdater } from "preact/hooks"
import * as api from "@api"

export interface PokemonFloatingCardProps {
    setEncountersPerVersionId: Dispatch<StateUpdater<api.EncountersPerVersionId | undefined>>
    setChosenVersionId: Dispatch<StateUpdater<number>>
    hideVersionFloatingCard: () => Promise<void>
    showVersionFloatingCard: () => Promise<void>
    hideNoEncountersFloatingCard: () => Promise<void>
    showNoEncountersFloatingCard: () => Promise<void>
}
