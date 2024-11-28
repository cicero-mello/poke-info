import { PokeApi } from "@types"

export interface GetEvolutionParams {
    evolutionChainId: number
}

export interface GetEvolutionResponse {
    pokemons: PokemonEvolution[]
}

export type GetEvolutionApiResponse = PokeApi.EvolutionChain

export interface PokemonEvolution {
    name: string
    id: number
    isBaby: boolean
    incenseToGetBaby?: string
    requirements: EvolutionRequirements[]
    evolvesFrom?: {
        pokemonName: string
        pokemonId: number
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
    needsOverworldRain?: boolean
    partySpecies?: string
    partyType?: PokeApi.PokemonType
    relativePhysicalStats?: RelativePhysicalStats
    timeOfDay?: string
    tradeSpecies?: string
    turnUpsideDown3DS?: boolean
}

export type RelativePhysicalStats = (
    "attack === defense" |
    "attack > defense" |
    "attack < defense"
)

export interface FlatChain extends PokeApi.Chain{
    evolvesFrom?: {
        pokemonName: string
        pokemonId: number
    }
}
