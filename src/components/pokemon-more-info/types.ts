export interface PokemonMoreInfoProps {
    pokemonId: number
    pokemonName: string
    specieId: number
}

export type CurrentSection = {
    name: "main"
} | {
    name: "abilities"
    abilityId: number
}
