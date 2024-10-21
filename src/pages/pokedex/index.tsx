import { FavoriteCheckbox, PokeCard, PokemonSearch, Switch } from "@components"
import { PokeCardMode } from "@components/poke-card/types"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useState } from "preact/hooks"
import * as S from "./styles"
import * as api from "@api"

export const Pokedex = () => {
    const { data, fetchNextPage, isFetching, isLoading } = useInfiniteQuery({
        queryKey: ['getPokemons'],
        queryFn: ({ pageParam = 0 }) => api.getPokemons({page: pageParam, limit: 1}),
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length === 0) return undefined
            return pages.length
        }
    })

    const [cardMode, setCardMode] = useState<PokeCardMode>("Simple")

    const handleChangeViewMode = (value: string) => {
        setCardMode(value as PokeCardMode)
    }

    return (
        <S.Screen>
            <S.Window>
                <S.Filters>
                    <PokemonSearch
                        onFind={(pokemonId) => {console.log(pokemonId)}}
                        label="Search a Pokémon by name or number"
                    />
                    <S.RightFilters>
                        <FavoriteCheckbox
                            label="Only Favorites"
                            onChange={(checked) => console.log(checked)}
                            onClick={() => fetchNextPage()}
                        />
                        <Switch
                            label="View Mode"
                            nameLeft="Simple"
                            nameRight="Detailed"
                            defaultValue="Simple"
                            onChange={handleChangeViewMode}
                        />
                    </S.RightFilters>
                </S.Filters>
                {isLoading && <h3>isLoading...</h3>}
                {!isLoading && (
                    <S.PokeCardsContainer>
                        {data?.pages.map(pageItems => (
                            pageItems.map(item => (
                                <PokeCard
                                    key={item.pokemonName}
                                    pokeId={item.pokemonName}
                                    cardMode={cardMode}
                                />
                            ))
                        ))}
                    </S.PokeCardsContainer>
                )}
                {isFetching && <h3>Loading more pokemons...</h3> }
            </S.Window>
        </S.Screen>
    )
}
