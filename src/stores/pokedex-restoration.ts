const STORAGE_NAME = "pokedex-restoration"

export interface PokedexRestorationData {
    scrollTop: number
    onlyFavorites: boolean
    cardMode: "Simple" | "Detailed"
}

export const addPokedexRestorationData = (
    pokedexRestorationData: PokedexRestorationData
) => {
    const jsonStringified = JSON.stringify(pokedexRestorationData)
    sessionStorage.setItem(STORAGE_NAME, jsonStringified)
}

export const getPokedexRestorationData = (): PokedexRestorationData | undefined => {
    if(typeof window === 'undefined') return

    const pokedexRestorationData = sessionStorage.getItem(STORAGE_NAME)
    if(!pokedexRestorationData) return
    return JSON.parse(pokedexRestorationData)
}

export const resetPokedexRestorationData = () => {
    sessionStorage.removeItem(STORAGE_NAME)
}
