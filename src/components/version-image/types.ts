import { VersionName } from "@types"
import { RefObject } from "preact"

export interface VersionImageProps {
    versionName?: VersionName
    componentRef?: RefObject<HTMLDivElement>
    onClick?: () => void | Promise<void>
}
