import { PokeApi } from "@types"
import { color } from "./color"

interface CardColors {
    background: color
    border: color
    borderStrong: color
}

export const getCardColors = (
    pokemonType: PokeApi.PokemonType
): CardColors => ({
    background: color?.[`${pokemonType}Card` as keyof typeof color],
    border: color?.[`${pokemonType}CardBorder` as keyof typeof color],
    borderStrong: color?.[`${pokemonType}CardBorderStrong` as keyof typeof color]
})
