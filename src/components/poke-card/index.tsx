import { FavoriteCheckbox, StatBar } from "@components"
import { capitalize, formatPokeNumber } from "@utils"
import { FunctionComponent as FC } from "preact"
import { useQuery } from "@tanstack/react-query"
import { PokeCardProps } from "./types"
import * as S from "./styles"
import * as api from "@api"

export const PokeCard: FC<PokeCardProps> = ({
    pokeId
}) => {
    const { data } = useQuery({
        queryKey: ["getPokemon", pokeId],
        queryFn: () => api.getPokemon({id: pokeId }),
    })

    const pokeNumber = formatPokeNumber(data?.id ?? 0)
    const pokeName = capitalize(data?.name ?? " ")

    return (
        <S.Card $pokemonType={data?.types[0]} id={pokeId}>
            <S.TopArea>
                <S.PokeNumber children={pokeNumber}/>
                <S.Image src={data?.imageUrl}/>
                <FavoriteCheckbox />
            </S.TopArea>
            <S.CardContentContainer>
                <S.CardContent>
                    <S.PokeName children={pokeName}/>
                    <S.StatsContainer>
                        {data?.baseStats.map(stat => (
                            <StatBar
                                statName={stat.name}
                                value={stat.value}
                            />
                        ))}
                    </S.StatsContainer>
                </S.CardContent>
            </S.CardContentContainer>
        </S.Card>
    )
}
