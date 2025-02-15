import { Dispatch, StateUpdater } from "preact/hooks"
import { EncountersPerVersionId } from "@api"

export interface ScreenProps {
    pokemonId: number
    setPokemonId: Dispatch<StateUpdater<number>>
    chosenVersionId: number
    setChosenVersionId: Dispatch<StateUpdater<number>>
    encountersPerVersionId: EncountersPerVersionId | undefined
    setEncountersPerVersionId: Dispatch<StateUpdater<EncountersPerVersionId | undefined>>
}
