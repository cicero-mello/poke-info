import { NamedAPIResource } from "./common"

export interface Pokemon {
    id: number
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
    abilities: Ability[]
    forms: NamedAPIResource[]
    game_indices: GameIndex[]
    held_items: HeldItem[]
    location_area_encounters: string
    moves: Move[]
    species: NamedAPIResource
    sprites: Sprites
    stats: Stat[]
    types: Type[]
    past_types: PastType[]
}

export interface Ability {
    ability: NamedAPIResource
    is_hidden: boolean
    slot: number
}

export interface GameIndex {
    game_index: number
    version: NamedAPIResource
}

export interface HeldItem {
    item: NamedAPIResource
    version_details: VersionDetail[]
}

export interface VersionDetail {
    rarity: number
    version: NamedAPIResource
}

export interface Move {
    move: NamedAPIResource
    version_group_details: VersionGroupDetail[]
}

export interface VersionGroupDetail {
    level_learned_at: number
    move_learn_method: NamedAPIResource
    version_group: NamedAPIResource
}

export interface Sprites {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
    other?: {
        dream_world: {
            front_default: string | null
            front_female: string | null
        }
        home: {
            front_default: string | null
            front_female: string | null
            front_shiny: string | null
            front_shiny_female: string | null
        }
        "official-artwork": {
            front_default: string | null
        }
    }
    versions?: {
        [generation: string]: {
            [version: string]: {
                back_default: string | null
                back_female: string | null
                back_shiny: string | null
                back_shiny_female: string | null
                front_default: string | null
                front_female: string | null
                front_shiny: string | null
                front_shiny_female: string | null
            }
        }
    }
}

export type StatName = (
    "hp" | "attack" | "defense" | "special-attack" |
    "special-defense" | "speed"
)

export interface Stat {
    base_stat: number
    effort: number
    stat: {
        name: StatName
        url: string
    }
}

export type PokemonType = (
    "normal" | "fighting" | "flying" | "poison" |
    "electric" | "psychic" | "ice" | "dragon" |
    "dark" | "fairy" | "unknown" | "shadow" |
    "steel" | "fire" | "water" | "grass" |
    "ground" | "rock" | "bug" | "ghost"
)

export interface Type {
    slot: number
    type: {
        name: PokemonType
        url: string
    }
}

export interface PastType {
    generation: NamedAPIResource
    types: Type[]
}

