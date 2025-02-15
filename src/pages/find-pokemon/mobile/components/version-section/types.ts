import { Dispatch, StateUpdater } from "preact/hooks"

export interface VersionSectionProps {
    chosenVersionId: number
    setChosenVersionId: Dispatch<StateUpdater<number>>
}
