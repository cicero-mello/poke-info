import { RefObject } from "preact"

export interface VersionFloatingCardProps {
    pokemonId: number
    versionGroupId: number
    setVersionGroupId: (versionGroupId: number) => void
    componentRef?: RefObject<HTMLDivElement>
}
