import { Flavor } from "@api"
import { Ref } from "preact"

export interface BerryContentProps {
    naturalGiftType?: string
    smoothness?: number
    firmness?: string
    size?: number
    naturalGiftPower?: number
    soilDryness?: number
    grownTime?: number
    maxHarvest?: number
    flavors?: Flavor[]
    pentagonSize?: number
    componentRef?: Ref<HTMLDivElement>
    pentagonAlwaysShowStatsValue?: boolean
}
