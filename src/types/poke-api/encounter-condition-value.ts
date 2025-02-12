import { Name, NamedAPIResource } from "./common"

export interface EncounterConditionValue {
    id: number
    name: string
    condition: NamedAPIResource
    names: Name[]
}
