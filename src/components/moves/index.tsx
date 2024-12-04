import { FunctionComponent as FC } from "preact"
import { useQuery } from "@tanstack/react-query"
import { MainSection } from "./sections"
import { MovesProps } from "./types"
import * as S from "./styles"
import * as api from "@api"

export const Moves: FC<MovesProps> = ({
    pokemonId
}) => {
    const { data } = useQuery({
        queryKey: ["getPokemon", pokemonId],
        queryFn: () => api.getPokemon({ idOrName: pokemonId+"" })
    })

    const versionGroupIds = (
        data ? [...data.moveIdsPerVersionGroupId.keys()] : []
    )

    return (
        <S.Component>
            <MainSection versionGroupIds={versionGroupIds} />
        </S.Component>
    )
}
