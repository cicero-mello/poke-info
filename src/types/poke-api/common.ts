export interface NamedAPIResource {
    name: string
    url: string
}

export interface NamedLanguageAPIResource {
    name: LanguageAbbreviations
    url: string
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
