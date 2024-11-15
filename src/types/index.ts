export enum PATHS {
    HOME = "/",
    POKEDEX = "/pokedex",
    POKEMON = "/pokedex/:id",
    BERRIES = "/berries",
    ABOUT = "/about",
    FIND_POKEMON = "/find-pokemon"
}

export * as PokeApi from "./poke-api"

export interface NameAndNumberId {
    name: string
    id: number
}
