import { Name, NamedAPIResource } from "./common"

export interface MoveLearnMethod {
    id: number
    name: string
    descriptions: MoveLearnMethodDescription[]
    names: Name[]
    version_groups: NamedAPIResource[]
}

interface MoveLearnMethodDescription {
    description: string
    language: NamedAPIResource
}
