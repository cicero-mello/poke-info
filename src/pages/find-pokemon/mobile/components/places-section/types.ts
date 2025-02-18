import { Encounter } from "@api"
import { RefObject } from "preact"

export interface PlacesSectionProps {
    componentRef: RefObject<HTMLDivElement>
    encounters: Encounter[]
}

export interface EncounterPlaces {
    areaName: string
    methods: {
        name: string
        chance: number
        maxLevel: number
        minLevel: number
        conditions: string[]
    }[]
}
