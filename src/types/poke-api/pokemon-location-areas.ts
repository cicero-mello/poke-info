import { NamedAPIResource } from "./common"

export interface PokemonLocationAreas {
    location_area: NamedAPIResource
    version_details: VersionEncounterDetail[]
}

export interface VersionEncounterDetail {
    version: NamedAPIResource
    max_chance: number
    encounter_details: EncounterDetail[]
}

export interface EncounterDetail {
    min_level: number
    max_level: number
    condition_values: NamedAPIResource[]
    chance: number
    method: NamedAPIResource
}
