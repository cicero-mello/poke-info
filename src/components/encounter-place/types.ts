export interface EncounterPlaceProps {
    areaName: string
    method: {
        name: string
        chance: number
        maxLevel: number
        minLevel: number
        conditions: string[]
    }
}
