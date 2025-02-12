export interface NamedAPIResource {
    name: string
    url: string
}

export interface NamedLanguageAPIResource {
    name: LanguageAbbreviations
    url: string
}

export interface FlavorText {
    flavor_text: string
    language: NamedLanguageAPIResource
    version: NamedAPIResource
}

export interface Name {
    name: string
    language: NamedLanguageAPIResource
}

export interface EffectEntry {
    effect: string
    short_effect: string
    language: NamedLanguageAPIResource
}

export interface EffectChange {
    version_group: NamedAPIResource
    effect_entries: EffectEntry[]
}

export interface FlavorTextEntry {
    flavor_text: string
    language: NamedAPIResource
    version_group: NamedAPIResource
}

export interface GameIndex {
    game_index: number
    version: NamedAPIResource
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

export type LanguageAbbreviations = (
    "en" | "ja" | "ko" | "fr" | "de" |
    "es" | "it" | "pt" | "ru" | "pl" |
    "nl" | "sv" | "tr" | "vi" | "id" |
    "cs" | "da" | "fi" | "no" | "he" |
    "ar" | "hi" | "ms" | "tl" | "hr" |
    "uk" | "bg" | "th" |
    "zh-Hant" | "zh-Hans"
)
