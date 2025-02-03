import { Flavor } from "@api"

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
}
