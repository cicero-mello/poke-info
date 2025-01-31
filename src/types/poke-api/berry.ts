import { NamedAPIResource } from "./common"

export interface Berry {
    id: number
    name: string
    growth_time: number
    max_harvest: number
    natural_gift_power: number
    size: number
    smoothness: number
    soil_dryness: number
    firmness: NamedAPIResource
    flavors: BerryFlavor[]
    item: NamedAPIResource
    natural_gift_type: NamedAPIResource
}

interface BerryFlavor {
    potency: number
    flavor: {
        name: FlavorName
        url: string
    }
}

export type FlavorName = "spicy" | "dry" | "sweet" | "bitter" | "sour"
