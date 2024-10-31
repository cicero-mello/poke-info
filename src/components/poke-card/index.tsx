import { FavoriteCheckbox, StatBar, PokemonImage, Button } from "@components"
import { capitalize, formatPokeNumber } from "@utils"
import { FunctionComponent as FC } from "preact"
import { useQuery } from "@tanstack/react-query"
import { customLocalStorage } from "@stores"
import { PokeCardProps } from "./types"
import { PATHS } from "@types"
import * as S from "./styles"
import * as api from "@api"

export const PokeCard: FC<PokeCardProps> = ({
    pokeId, cardMode
}) => {
    const { data } = useQuery({
        queryKey: ["getPokemon", pokeId],
        queryFn: () => api.getPokemon({ idOrName: pokeId })
    })

    const pokeNumber = formatPokeNumber(data?.id)
    const pokeName = capitalize(data?.name)

    return (
        <S.Card
            id={pokeId}
            $cardMode={cardMode}
            $pokemonType={data?.types[0]}
        >
            <Button navigate={{path: PATHS.POKEDEX + `/${pokeId}`}}>
                <S.TopArea>
                    <S.PokeNumber children={pokeNumber}/>
                    <PokemonImage
                        imageUrl={data?.imageUrl}
                        alt={pokeName}
                    />
                </S.TopArea>
                <S.CardContentContainer>
                    <S.CardContent>
                        <S.PokeName children={pokeName} />
                        <S.StatsContainer>
                            {[0,1,2,3,4,5].map((n) => (
                                <StatBar
                                    key={pokeId + `stat-${n}`}
                                    statName={data?.baseStats[n].name}
                                    value={data?.baseStats[n].value}
                                    withLabel={cardMode === "Detailed"}
                                />
                            ))}
                        </S.StatsContainer>
                    </S.CardContent>
                </S.CardContentContainer>
            </Button>
            <FavoriteCheckbox
                checked={customLocalStorage.getIsPokemonFavorited(data?.id ?? 0)}
                onClick={() => {
                    customLocalStorage.toogleFavoriteOfPokemon(data?.id ?? 0)
                }}
            />
        </S.Card>
    )
}
