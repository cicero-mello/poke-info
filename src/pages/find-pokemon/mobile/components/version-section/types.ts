import { Dispatch, StateUpdater } from "preact/hooks"
import { RefObject } from "preact"

export interface VersionSectionProps {
    versionIds: number[]
    chosenVersionId: number
    setChosenVersionId: Dispatch<StateUpdater<number>>
    componentRef?: RefObject<HTMLDivElement>
}
