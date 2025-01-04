import { GetMoveTargetApiResponse, GetMoveTargetParams, GetMoveTargetResponse } from "./types"
import { capitalizeApiName } from "@utils"
import axios from "axios"

const url = "https://pokeapi.co/api/v2/move-target/"

export const getMoveTarget = async ({
    idOrName
}: GetMoveTargetParams): Promise<GetMoveTargetResponse> => {

    const { data } = await axios.get<GetMoveTargetApiResponse>(
        url + idOrName
    )

    return {
        id: data.id,
        moveTargetName: (
            data.names.find(({language}) => language.name === "en")?.name
            ?? capitalizeApiName(data.name)
        )
    }
}
