import { Name, NamedAPIResource, VersionEncounterDetail } from "./common"

export interface LocationArea {
    id: number
    name: string
    game_index: number
    encounter_method_rates: EncounterMethodRate[]
    location: NamedAPIResource
    names: Name[]
    pokemon_encounters: PokemonEncounter[]
}

export interface EncounterMethodRate {
    encounter_method: NamedAPIResource
    version_details: EncounterVersionDetails[]
}

export interface EncounterVersionDetails {
    rate: number
    version: NamedAPIResource
}

export interface PokemonEncounter {
    pokemon: NamedAPIResource
    version_details: VersionEncounterDetail[]
}
