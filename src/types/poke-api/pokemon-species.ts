import { FlavorText, Name, NamedAPIResource, NamedLanguageAPIResource } from "./common"

export interface PokemonSpecies {
    base_happiness: number
    capture_rate: number
    color: NamedAPIResource
    egg_groups: NamedAPIResource[]
    evolution_chain: Omit<NamedAPIResource, "name">
    evolves_from_species: NamedAPIResource
    flavor_text_entries: FlavorText[]
    form_descriptions: Description[]
    forms_switchable: boolean
    gender_rate: number
    genera: Genus[]
    generation: NamedAPIResource
    growth_rate: NamedAPIResource
    habitat: NamedAPIResource | null
    has_gender_differences: boolean
    hatch_counter: number
    id: number
    is_baby: boolean
    is_legendary: boolean
    is_mythical: boolean
    name: string
    names: Name[]
    order: number
    pal_park_encounters: PalParkEncounterArea[]
    pokedex_numbers: PokemonSpeciesDexEntry[]
    shape: NamedAPIResource
    varieties: PokemonSpeciesVariety
}

export interface Description {
    description: string
    language: NamedLanguageAPIResource
}

export interface Genus {
    genus: string
    language: NamedLanguageAPIResource
}

export interface PalParkEncounterArea {
    base_score: number
    rate: number
    area: NamedAPIResource
}

export interface PokemonSpeciesDexEntry {
    entry_number: number
    pokedex: NamedAPIResource
}

export interface PokemonSpeciesVariety {
    is_default: boolean
    pokemon: NamedAPIResource
}
