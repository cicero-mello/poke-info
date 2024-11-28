export interface PokemonMoreInfoProps {
    pokemonId: number
}

export type CurrentSection = {
    name: "main"
} | {
    name: "abilities"
    abilityId: number
}
