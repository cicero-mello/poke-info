import { capitalizeApiName, removeEscapeSequences } from "@utils"
import { GetItemApiResponse, GetItemParams, GetItemResponse } from "./types"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/item/"

export const getItem = async ({
    idOrName
}: GetItemParams): Promise<GetItemResponse> => {

    const { data } = await axios.get<GetItemApiResponse>(url + idOrName)

    const effectEntry = data.effect_entries.find(
        effectEntry => effectEntry.language.name === "en"
    )

    const shortEffect = removeEscapeSequences(effectEntry?.short_effect ?? "")
    const description = removeEscapeSequences(effectEntry?.effect ?? "")

    return {
        spriteUrl: data.sprites.default,
        shortEffect: shortEffect,
        description: description,
        category: capitalizeApiName(data.category.name),
        cost: data.cost,
        flingPower: data.fling_power ?? undefined,
        flingEffect: capitalizeApiName(data.fling_effect?.name ?? ""),
        isHoldableActive: data.held_by_pokemon.length > 0
    }
}
