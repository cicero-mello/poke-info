import { Name, NamedAPIResource, NamedLanguageAPIResource } from "./common"

export interface MoveTarget {
    id: number
    name: string
    descriptions: MoveTargetDescription[]
    moves: NamedAPIResource[]
    names: Name[]
}

interface MoveTargetDescription {
    description: string
    language: NamedLanguageAPIResource
}
