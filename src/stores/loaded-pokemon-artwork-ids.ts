const STORAGE_NAME = "loaded-pokemon-artwork-id"

export const getLoadedPokemonArtworkIds = (): number[] => {
    if(typeof window === 'undefined') return []

    const loadedPokemonArtworkIds = sessionStorage.getItem(STORAGE_NAME)
    if(!loadedPokemonArtworkIds) return []
    return JSON.parse(loadedPokemonArtworkIds)
}

export const addLoadedPokemonArtworkIds = (pokemonId: number) => {
    const loadedPokemonArtworkIds = getLoadedPokemonArtworkIds()

    const idAlreadyExists = loadedPokemonArtworkIds.find(
        (id) => id === pokemonId
    )
    if(idAlreadyExists) return

    loadedPokemonArtworkIds.push(pokemonId)

    const jsonStringified = JSON.stringify(loadedPokemonArtworkIds)

    sessionStorage.setItem(STORAGE_NAME, jsonStringified)
}

export const getIsPokemonArtworkLoaded = (pokemonId: number) => {
    const loadedPokemonArtworkIds = getLoadedPokemonArtworkIds()

    return !!loadedPokemonArtworkIds.find(
        (id) => id === pokemonId
    )
}
