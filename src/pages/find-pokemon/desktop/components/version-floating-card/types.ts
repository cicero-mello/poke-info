import { RefObject } from "preact"

export interface VersionFloatingCardProps {
    chosenVersionId: number
    setChosenVersionId: (versionId: number) => void
    versionIds: number[]
    componentRef?: RefObject<HTMLDivElement>
    showPlacesFloatingCard: () => Promise<void>
    hidePlacesFloatingCard: () => Promise<void>
}
