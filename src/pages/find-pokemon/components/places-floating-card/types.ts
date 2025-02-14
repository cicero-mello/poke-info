import { Encounter } from "@api"
import { RefObject } from "preact"

export interface PlacesFloatingCardProps {
    componentRef?: RefObject<HTMLDivElement>
    encounters: Encounter[]
}
