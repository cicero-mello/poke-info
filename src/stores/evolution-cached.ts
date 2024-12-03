const STORAGE_NAME = "evolution-cached"

export const getEvolutionCachedIds = (): number[] => {
    if(typeof window === 'undefined') return []

    const evolutionCachedIds = sessionStorage.getItem(STORAGE_NAME)
    if(!evolutionCachedIds) return []
    return JSON.parse(evolutionCachedIds)
}

export const addEvolutionCachedId = (evolutionChainId: number) => {
    const evolutionCachedIds = getEvolutionCachedIds()

    const idAlreadyExists = evolutionCachedIds.find(
        (id) => id === evolutionChainId
    )
    if(idAlreadyExists) return

    evolutionCachedIds.push(evolutionChainId)

    const jsonStringified = JSON.stringify(evolutionCachedIds)

    sessionStorage.setItem(STORAGE_NAME, jsonStringified)
}

export const isEvolutionCached = (evolutionChainId: number) => {
    const evolutionCachedIds = getEvolutionCachedIds()

    return !!evolutionCachedIds.find(
        (id) => id === evolutionChainId
    )
}
