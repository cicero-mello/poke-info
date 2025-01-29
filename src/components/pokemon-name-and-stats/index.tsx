import { PokemonNameAndStatsProps } from "./types"
import { FunctionComponent as FC } from "preact"
import { useQuery } from "@tanstack/react-query"
import { StatBar } from "@components"
import * as S from "./styles"
import * as api from "@api"

export const PokemonNameAndStats: FC<PokemonNameAndStatsProps> = ({
    pokeId, statsWithLabel, bigMode, noName
}) => {
    const { data } = useQuery({
        queryKey: ["getPokemon", pokeId],
        queryFn: () => api.getPokemon({ idOrName: pokeId.toString() })
    })

    return (
        <S.Component>
            {!noName && (bigMode ?
                <S.BigPokeName children={data?.name}/> :
                <S.PokeName children={data?.name}/>
            )}
            <S.StatsContainer $bigMode={bigMode}>
                {[0, 1, 2, 3, 4, 5].map((n) => (
                    <StatBar
                        key={pokeId + `stat-${n}`}
                        statName={data?.baseStats[n].name}
                        value={data?.baseStats[n].value}
                        withLabel={statsWithLabel}
                        bigMode={bigMode}
                    />
                ))}
            </S.StatsContainer>
        </S.Component>
    )
}
