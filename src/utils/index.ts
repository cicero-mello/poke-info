export * from "./debounce"

export const delay = (time: number) => new Promise((resolve) => {
    setTimeout(() => resolve(true), time)
})

export const normalizePokemonName = (pokemonName: string): string => (
    pokemonName
        .normalize("NFD")
        .toLowerCase()
        .replace(/\s+/g, " ")               // Remove duplicated spaces
        .replace(/ /g, "-")                 // Replaces spaces with "-"
        .replace(/_/g, "-")                 // Replaces "_" with "-"
        .replace(/[\u0300-\u036f]/g, "")    // Remove accentuation
        .replace(/[^\w\-]/g, "")            // Remove special characters
)

export const formatPokeNumber = (
    pokeNumber?: number
): string | undefined => (
    !pokeNumber ? undefined :
    "nº " + pokeNumber.toString().padStart(3, "0")
)

export const capitalize = (str?: string): string | undefined => {
    if(!str) return undefined

    const strArray = str.toLowerCase().split("")
    strArray[0] = strArray[0].toUpperCase()
    return strArray.join("")
}

export const getRootFontSize = () => (
    parseInt(
        window.getComputedStyle(
            document.documentElement
        ).fontSize.slice(0, -2)
    )
)

/**
 * If is pokemon path, returns the pokemonId,
 * else, returns undefined
 * @param path
 * @returns pokemonId | undefined
 */
export const isPokemonPath = (path: string): number | undefined => {
    const regex = /^\/pokedex\/\d+$/
    if(!regex.test(path)) return
    return +path.split("/")[2]
}

export const extractIdFromUrl = (url: string): number => {
    const match = url.match(/\/(\d+)\/$/)
    return match ? Number(match[1]) : 0
}

export const removeEscapeSequences = (
    string: string
): string => {
    const escapeSequences = [
        "\n", "\r", "\t", "\b", "\f",
        "\v", "\\", "\a", "\0",
    ]

    let result = string

    escapeSequences.forEach(escapeSequence => {
        if(result.includes(escapeSequence)){
            result = result.replace(escapeSequence, " ")
        }
    })

    return string.replace(/\n|\f/g, " ")
}
