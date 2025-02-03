import { EffectEntry, GameIndex, Name, NamedAPIResource } from "./common"

export interface Item {
    id: number
    name: string
    cost: number
    fling_power: number | null
    fling_effect: NamedAPIResource | null
    attributes: NamedAPIResource[]
    category: NamedAPIResource
    effect_entries: EffectEntry[]
    flavor_text_entries: VersionGroupFlavorText[]
    game_indices: GameIndex[]
    names: Name[]
    sprites: { default: string }
    held_by_pokemon: ItemHolderPokemon[]
    baby_trigger_for: { url: string } | null
    machines: Machine[]
}

interface Machine {
    machine: { url: string }
    version_group: NamedAPIResource
}

interface VersionGroupFlavorText {
    text: string
    version_group: NamedAPIResource
    language: NamedAPIResource
}

interface ItemHolderPokemonVersionDetail {
    rarity: number
    version: NamedAPIResource
}

interface ItemHolderPokemon {
    pokemon: NamedAPIResource
    version_details: ItemHolderPokemonVersionDetail[]
}
