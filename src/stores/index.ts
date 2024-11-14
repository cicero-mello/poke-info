import { addPokedexRestorationData, getPokedexRestorationData, resetPokedexRestorationData } from "./pokedex-restoration"
import * as loadedPokemonArtworkIds from "./loaded-pokemon-artwork-ids"
export type { PokedexRestorationData } from "./pokedex-restoration"
import * as favoritePokemons from "./favorite-pokemons"

export const customLocalStorage = {
    ...favoritePokemons
}

export const customSessionStorage = {
    ...loadedPokemonArtworkIds,
    addPokedexRestorationData,
    getPokedexRestorationData,
    resetPokedexRestorationData
}
