import { PageAnimations } from "../../animations/types"
import { Dispatch, StateUpdater } from "preact/hooks"
import { EncountersPerVersionId } from "@api"

export interface PokemonSectionProps {
    pokemonId: number
    setPokemonId: Dispatch<StateUpdater<number>>
    setChosenVersionId: Dispatch<StateUpdater<number>>
    setEncountersPerVersionId: Dispatch<StateUpdater<EncountersPerVersionId | undefined>>
    pageAnimations: PageAnimations
}
