import { useEvolutionQueries } from "./use-evolution-queries"
import { FunctionComponent as FC } from "preact"
import { EvolutionProps } from "./types"
import * as S from "./styles"

export const Evolution: FC<EvolutionProps> = ({
    pokemonId
}) => {
    const data = useEvolutionQueries(pokemonId)

    console.log(data?.pokemons)

    return (
        <S.Component>
            Evolution
        </S.Component>
    )
}
