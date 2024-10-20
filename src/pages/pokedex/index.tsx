import { FavoriteCheckbox, PokeCard, PokemonSearch, Switch } from "@components"
import { useInfiniteQuery } from "@tanstack/react-query"
import * as S from "./styles"
import * as api from "@api"

export const Pokedex = () => {
    const { data, fetchNextPage, isFetching, isLoading } = useInfiniteQuery({
        queryKey: ['getPokemons'],
        queryFn: ({ pageParam = 0 }) => api.getPokemons({page: pageParam, limit: 16}),
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length === 0) return undefined
            return pages.length
        }
    })

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
                            onChange={(a) => console.log(a)}
                        />
                    </S.RightFilters>
                </S.Filters>
                {isLoading && <h3>isLoading...</h3>}
                {!isLoading && (
                    <S.PokeCardsContainer>
                        {data?.pages.map(pageItems => (
                            pageItems.map(item => (
                                <PokeCard pokeId={item.pokemonName} />
                            ))
                        ))}
                    </S.PokeCardsContainer>
                )}
                {isFetching && <h3>Loading more pokemons...</h3> }
            </S.Window>
        </S.Screen>
    )
}
