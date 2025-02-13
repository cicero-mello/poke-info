import { Dispatch, StateUpdater } from "preact/hooks"
import * as api from "@api"

export interface PokemonFloatingCardProps {
    setEncountersPerVersionId: Dispatch<StateUpdater<api.EncountersPerVersionId | undefined>>
    hideVersionFloatingCard: () => Promise<void>
    showVersionFloatingCard: () => Promise<void>
    hideNoEncountersFloatingCard: () => Promise<void>
    showNoEncountersFloatingCard: () => Promise<void>
}
