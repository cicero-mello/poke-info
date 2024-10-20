export * from "./debounce"

export const delay = (time: number) => new Promise((resolve) => {
    setTimeout(() => resolve(true), time)
})

export const normalizePokemonId = (pokemonId: string): string => (
    pokemonId
        .normalize("NFD")
        .toLowerCase()
        .replace(/\s+/g, " ")               // Remove duplicated spaces
        .replace(/ /g, "-")                 // Replaces spaces with "-"
        .replace(/_/g, "-")                 // Replaces "_" with "-"
        .replace(/[\u0300-\u036f]/g, "")    // Remove accentuation
        .replace(/[^\w\-]/g, "")            // Remove special characters
)

export const formatPokeNumber = (pokeNumber: number): string => (
    "nº " + pokeNumber.toString().padStart(3, '0')
)

export const capitalize = (str: string): string => {
    const strArray = str.toLowerCase().split("")
    strArray[0] = strArray[0].toUpperCase()
    return strArray.join("")
}
