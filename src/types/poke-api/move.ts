import { EffectChange, EffectEntry, FlavorTextEntry, Name, NamedAPIResource } from "./common"
import { PokemonType } from "./pokemon"

export interface Move {
    id: number
    name: string
    accuracy: number | null
    effect_chance: number | null
    pp: number
    priority: number
    power: number | null
    contest_combos: ContestCombos | null
    contest_type: NamedAPIResource | null
    contest_effect: NamedAPIResource | null
    damage_class: DamageClass
    effect_entries: EffectEntry[]
    effect_changes: EffectChange[]
    learned_by_pokemon: NamedAPIResource[]
    flavor_text_entries: FlavorTextEntry[]
    generation: NamedAPIResource
    machines: MachineVersionDetail[]
    meta: MoveMeta | null
    names: Name[]
    past_values: PastValue[]
    stat_changes: StatChange[]
    super_contest_effect: NamedAPIResource | null
    target: NamedAPIResource
    type: MoveType
}

export type DamageClassName = (
    "status" | "physical" | "special"
)

interface DamageClass {
    name: DamageClassName
    url: string
}

interface MoveType {
    name: PokemonType
    url: string
}

interface ContestComboDetail {
    use_before?: NamedAPIResource[]
    use_after?: NamedAPIResource[]
}

interface ContestCombos {
    normal?: ContestComboDetail
    super?: ContestComboDetail
}

interface MachineVersionDetail {
    machine: NamedAPIResource
    version_group: NamedAPIResource
}

interface MoveMeta {
    ailment: NamedAPIResource
    category: NamedAPIResource
    min_hits: number | null
    max_hits: number | null
    min_turns: number | null
    max_turns: number | null
    drain: number
    healing: number
    crit_rate: number
    ailment_chance: number
    flinch_chance: number
    stat_chance: number
}

interface PastValue {
    accuracy: number | null
    effect_chance: number | null
    power: number | null
    pp: number | null
    effect_entries: EffectEntry[]
    type: MoveType | null
    version_group: NamedAPIResource
}

interface StatChange {
    change: number
    stat: NamedAPIResource
}
