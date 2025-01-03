import { EffectChange, EffectEntry, FlavorTextEntry, Name, NamedAPIResource } from "./common"

export interface FullAbility {
    id: number
    name: string
    is_main_series: boolean
    generation: NamedAPIResource
    names: Name[],
    effect_entries: EffectEntry[],
    effect_changes: EffectChange[],
    flavor_text_entries: FlavorTextEntry[],
    pokemon: {
        is_hidden: boolean
        slot: number,
        pokemon: NamedAPIResource
    }[]
}
