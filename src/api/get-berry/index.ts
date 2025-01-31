import { capitalizeApiName, extractIdFromUrl } from "@utils"
import { GetBerryApiResponse, GetBerryParams, GetBerryResponse } from "./types"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/berry/"

export const getBerry = async ({
    idOrName
}: GetBerryParams): Promise<GetBerryResponse> => {
    const { data } = await axios.get<GetBerryApiResponse>(url + idOrName)

    return {
        id: data.id,
        itemId: extractIdFromUrl(data.item.url),
        name: capitalizeApiName(data.name),
        naturalGiftType: capitalizeApiName(data.natural_gift_type.name),
        smoothness: data.smoothness,
        firmness: capitalizeApiName(data.firmness.name),
        size: data.size,
        naturalGiftPower: data.natural_gift_power,
        soilDryness: data.soil_dryness,
        grownTime: data.growth_time,
        maxHarvest: data.max_harvest,
        flavors: data.flavors.map((item) => ({
            name: item.flavor.name,
            potency: item.potency
        }))
    }
}
