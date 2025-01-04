import { Dispatch, StateUpdater } from "preact/hooks"
import { CurrentSection } from "../../types"

export interface MainSectionProps {
    versionGroupIds: number[]
    setCurrentSection: Dispatch<StateUpdater<CurrentSection>>
}
