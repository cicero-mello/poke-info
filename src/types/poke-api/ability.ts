import { NamedAPIResource, NamedLanguageAPIResource } from "./common"

export interface FullAbility {
    id: number
    name: string
    is_main_series: boolean
    generation: NamedAPIResource
    names: {
        name: string,
        language: NamedLanguageAPIResource
    }[],
    effect_entries: {
        effect: string
        short_effect: string
        language: NamedLanguageAPIResource
    }[],
    effect_changes: {
        version_group: NamedAPIResource
        effect_entries: {
            effect: string
            language: NamedLanguageAPIResource
        }
    }[],
    flavor_text_entries: {
        flavor_text: string
        language: NamedLanguageAPIResource
        version_group: NamedAPIResource
    }[],
    pokemon: {
        is_hidden: boolean
        slot: number,
        pokemon: NamedAPIResource
    }[]
}
