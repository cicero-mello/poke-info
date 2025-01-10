const STORAGE_NAME = "favorite-pokemons"

export const getFavoritePokemons = (): number[] => {
    if(typeof window === 'undefined') return []

    const favoritePokemons = localStorage.getItem(STORAGE_NAME)
    if(!favoritePokemons) return []
    return JSON.parse(favoritePokemons)
}

export const getIsPokemonFavorited = (pokemonId: number): boolean => {
    const favoritePokemons = getFavoritePokemons()

    return !!favoritePokemons.find(
        (favoritePokemon) => favoritePokemon === pokemonId
    )
}

export const toggleFavoriteOfPokemon = (pokemonId: number) => {
    const favoritePokemons = getFavoritePokemons()

    const indexOfFavoritePokemon = favoritePokemons.findIndex(
        (favoritePokemon) => favoritePokemon === pokemonId
    )

    const isPokemonAlreadyFavorite = indexOfFavoritePokemon != -1

    if(isPokemonAlreadyFavorite){
        favoritePokemons.splice(indexOfFavoritePokemon, 1)
    } else {
        favoritePokemons.unshift(pokemonId)
    }

    const jsonStringified = JSON.stringify(favoritePokemons)
    localStorage.setItem(STORAGE_NAME, jsonStringified)
}
