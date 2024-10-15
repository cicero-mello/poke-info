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
