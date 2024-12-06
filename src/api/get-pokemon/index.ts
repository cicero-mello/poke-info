import { GetPokemonParams, GetPokemonApiResponse, GetPokemonResponse } from "./types"
import { capitalize, capitalizeApiName, extractIdFromUrl } from "@utils"
import { moveIdsPerVersionGroupId } from "./core"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/pokemon/"

export const getPokemon = async ({
    idOrName
}: GetPokemonParams): Promise<GetPokemonResponse> => {
    const { data } = await axios.get<GetPokemonApiResponse>(
        url + idOrName
    )

    return {
        id: data.id,
        name: capitalizeApiName(data.name),
        imageUrl: data.sprites.other?.["official-artwork"].front_default ?? "",
        pixelArtUrl: data.sprites.front_default ?? "",
        types: data.types.map(type => type.type.name),
        mHeight: +(data.height/10).toFixed(1),
        kgWeight: +(data.weight/10).toFixed(1),
        specieId: extractIdFromUrl(data.species.url),
        baseStats: data.stats.map((stat) => ({
            name: stat.stat.name,
            value: stat.base_stat
        })),
        movesPerVersionGroupId: moveIdsPerVersionGroupId(data.moves),
        abilities: data.abilities.map((ability) => ({
            name: ability.ability.name.split("-").map(text => capitalize(text)).join(" "),
            id: extractIdFromUrl(ability.ability.url),
            isHidden: ability.is_hidden,
            slot: ability.slot
        }))
    }
}
