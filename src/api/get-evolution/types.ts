import { PokeApi } from "@types"

export interface GetEvolutionParams {
    evolutionChainId: number
}

export interface GetEvolutionResponse {
    pokemons: PokemonEvolution[]
}

export type GetEvolutionApiResponse = PokeApi.EvolutionChain

export interface PokemonEvolution {
    specieName: string
    specieId: number
    isBaby: boolean
    incenseToGetBaby?: string
    requirements: EvolutionRequirements[]
    evolvesFrom?: {
        specieName: string
        specieId: number
    }
}

export type Gender = "male" | "female"

export interface EvolutionRequirements {
    trigger: string
    item?: string
    gender?: "male" | "female"
    heldItem?: string
    knowMoveType?: PokeApi.PokemonType
    location?: string
    minAffection?: number
    minBeauty?: number
    minHappiness?: number
    minLevel?: number
    needsOverworldRain?: boolean
    partySpecies?: string
    partyType?: PokeApi.PokemonType
    relativePhysicalStats?: RelativePhysicalStats
    timeOfDay?: string
    tradeSpecie?: {
        name: string
        id: number
    }
    turnUpsideDown3DS?: boolean
}

export type RelativePhysicalStats = (
    "attack === defense" |
    "attack > defense" |
    "attack < defense"
)

export interface FlatChain extends PokeApi.Chain{
    evolvesFrom?: {
        specieName: string
        specieId: number
    }
}
