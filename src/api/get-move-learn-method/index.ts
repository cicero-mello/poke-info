import { GetMoveLearnMethodApiResponse, GetMoveLearnMethodParams, GetMoveLearnMethodResponse } from "./types"
import { capitalizeApiName } from "@utils"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/move-learn-method/"

export const getMoveLearnMethod = async ({
    idOrName
}: GetMoveLearnMethodParams): Promise<GetMoveLearnMethodResponse> => {

    const { data } = await axios.get<GetMoveLearnMethodApiResponse>(
        url + idOrName
    )

    const name = (
        data.names.find(({language}) => language.name === "en")!.name
        ?? capitalizeApiName(data.name)
    )

    const description = (
        data.descriptions.find(({language}) => language.name === "en")!.description
    )

    return {
        name: name,
        description: description
    }
}
