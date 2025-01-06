import { FavoriteCheckbox, PokemonImage, Button, PokemonNameAndStats } from "@components"
import { capitalize, formatPokeNumber } from "@utils"
import { FunctionComponent as FC } from "preact"
import { useQuery } from "@tanstack/react-query"
import { customLocalStorage } from "@stores"
import { PokeCardProps } from "./types"
import { SparklesIco } from "@assets"
import { PATHS } from "@types"
import * as S from "./styles"
import * as api from "@api"

export const PokeCard: FC<PokeCardProps> = ({
    pokeId, cardMode, onClick
}) => {
    const { data } = useQuery({
        queryKey: ["getPokemon", pokeId],
        queryFn: () => api.getPokemon({ idOrName: pokeId.toString() })
    })

    const pokeNumber = formatPokeNumber(data?.id)
    const pokeName = capitalize(data?.name)

    const isFavorite = (
        customLocalStorage.getIsPokemonFavorited(data?.id ?? 0)
    )

    const handleClickFavorite = () => {
        customLocalStorage.toogleFavoriteOfPokemon(data?.id ?? 0)
    }

    return (
        <S.Card
            $cardMode={cardMode}
            $pokemonType={data?.types[0]}
        >
            <Button
                preventNavOnClick
                navigate={{
                    path: PATHS.POKEDEX + `/${pokeId}`,
                    transition: false
                }}
                onClick={onClick}
            >
                <S.TopArea>
                    {!!data?.id && data.id < 10000 && (
                        <S.PokeNumber children={pokeNumber}/>
                    )}
                    {!!data?.id && data.id >= 10000 && (
                        <SparklesIco />
                    )}

                    <PokemonImage
                        imageUrl={data?.imageUrl}
                        alt={pokeName}
                        pokemonId={pokeId}
                    />
                </S.TopArea>
                <S.DownAreaContainer>
                    <S.DownArea>
                        <PokemonNameAndStats
                            pokeId={pokeId}
                            statsWithLabel={cardMode === "Detailed"}
                        />
                    </S.DownArea>
                </S.DownAreaContainer>
            </Button>
            <FavoriteCheckbox
                checked={isFavorite}
                onClick={handleClickFavorite}
            />
        </S.Card>
    )
}
