export interface EncounterPlaceProps {
    areaId: number
    method: {
        id: number
        chance: number
        maxLevel: number
        minLevel: number
        conditionIds: number[]
    }
}

export interface EncounterPlaceData {
    areaName: string
    method: {
        name: string
        chance: number
        maxLevel: number
        minLevel: number
        conditions: string[]
    }
}
