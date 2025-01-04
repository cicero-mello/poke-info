export interface MovesProps {
    pokemonId: number
}

export type CurrentSection = {
    name: "main"
} | {
    name: "moves"
    versionName: string
    versionGroupId: number
}
