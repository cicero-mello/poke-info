import { useInfiniteQuery } from "@tanstack/react-query"
import { Button, FavoriteCheckbox, PokemonSearch } from "@components"
import * as S from "./styles"
import * as api from "@api"

export const Pokedex = () => {
    const { data, fetchNextPage, isFetching, isLoading } = useInfiniteQuery({
        queryKey: ['getPokemons'],
        queryFn: ({ pageParam = 0 }) => api.getPokemons({page: pageParam, limit: 3}),
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
                    <FavoriteCheckbox
                        label="Only Favorites"
                        onChange={(checked) => console.log(checked)}
                    />
                </S.Filters>
                <Button
                    children="Next page"
                    theme="lineWhite"
                    onClick={() => fetchNextPage()}
                />
                {isLoading ?
                    <h3>isLoading...</h3> :
                    <pre>{JSON.stringify(data?.pages, null, 2)}</pre>
                }
                {isFetching && <h3>Loading more pokemons...</h3> }
            </S.Window>
        </S.Screen>
    )
}
