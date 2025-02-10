import { VersionName } from "@types"
import { RefObject } from "preact"

export interface VersionImageProps {
    id?: string
    versionName?: VersionName
    componentRef?: RefObject<HTMLDivElement>
    onClick?: () => void | Promise<void>
}
