export enum PATHS {
    HOME = "/",
    POKEDEX = "/pokedex",
    POKEMON = "/pokedex/:id",
    BERRIES = "/berries",
    BERRY = "/berries/:id",
    ABOUT = "/about",
    FIND_POKEMON = "/find-pokemon"
}

export * as PokeApi from "./poke-api"

export interface NameAndNumberId {
    name: string
    id: number
}

export type VersionName = (
    | "Red"
    | "Blue"
    | "Yellow"
    | "Gold"
    | "Silver"
    | "Crystal"
    | "Ruby"
    | "Sapphire"
    | "Emerald"
    | "Fire Red"
    | "Leaf Green"
    | "Diamond"
    | "Pearl"
    | "Platinum"
    | "Heart Gold"
    | "Soul Silver"
    | "Black"
    | "White"
    | "Colosseum"
    | "XD"
    | "Black 2"
    | "White 2"
    | "X"
    | "Y"
    | "Omega Ruby"
    | "Alpha Sapphire"
    | "Sun"
    | "Moon"
    | "Ultra Sun"
    | "Ultra Moon"
    | "Let's Go Pikachu"
    | "Let's Go Eevee"
    | "Sword"
    | "Shield"
    | "The Isle Of Armor"
    | "The Crown Tundra"
    | "Brilliant Diamond"
    | "Shining Pearl"
    | "Legends Arceus"
    | "Scarlet"
    | "Violet"
    | "The Teal Mask"
    | "The Indigo Disk"
)
