import * as favoritePokemons from "./favorite-pokemons"
import * as loadedPokemonArtworkIds from "./loaded-pokemon-artwork-ids"

export const customLocalStorage = {
    ...favoritePokemons
}

export const customSessionStorage = {
    ...loadedPokemonArtworkIds
}
