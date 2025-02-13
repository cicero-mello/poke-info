import { RefObject } from "preact"

export interface VersionFloatingCardProps {
    versionGroupId: number
    setVersionGroupId: (versionGroupId: number) => void
    componentRef?: RefObject<HTMLDivElement>
}
