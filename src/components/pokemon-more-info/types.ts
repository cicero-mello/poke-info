export interface PokemonMoreInfoProps {
    pokemonId: number
    pokemonName: string
}

export type CurrentSection = {
    name: "main"
} | {
    name: "abilities"
    abilityId: number
}
