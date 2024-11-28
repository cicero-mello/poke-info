import { NamedAPIResource } from "./common"

export interface EvolutionChain {
    id: number
    baby_trigger_item: NamedAPIResource | null
    chain: Chain
}

export interface Chain {
    is_baby: boolean
    species: NamedAPIResource
    evolution_details: EvolutionDetails[]
    evolves_to: Chain[]
}

export interface EvolutionDetails {
    item?: NamedAPIResource | null
    trigger: NamedAPIResource
    held_item?: NamedAPIResource | null
    known_move?: NamedAPIResource | null
    known_move_type?: NamedAPIResource | null
    location?: NamedAPIResource | null
    min_affection?: number | null
    min_beauty?: number | null
    min_happiness?: number | null
    min_level?: number | null
    needs_overworld_rain?: boolean
    party_species?: NamedAPIResource | null
    party_type?: NamedAPIResource | null
    time_of_day?: string
    trade_species?: NamedAPIResource | null
    turn_upside_down?: boolean

    /** 1: Atk > Def | 0: Atk = Def | -1: Atk < Def */
    relative_physical_stats?: number | null

    /** 1: Male | 2: Female */
    gender?: number | null
}
