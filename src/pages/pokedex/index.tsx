import { FavoriteCheckbox, PokemonSearch, Switch, PokeCardMode, PokemonsList } from "@components"
import { useEffect, useRef, useState } from "preact/hooks"
import { useInfiniteQuery } from "@tanstack/react-query"
import { getShowToogleFilterButton } from "./core"
import { useWindowResize } from "@hooks"
import { delay } from "@utils"
import * as S from "./styles"
import * as api from "@api"

export const Pokedex = () => {
    const infiniteQuery = useInfiniteQuery({
        queryKey: ["getPokemons"],
        initialPageParam: 0,
        queryFn: ({ pageParam = 0 }) => api.getPokemons({
            page: pageParam, limit: 20
        }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length === 0) return undefined
            return pages.length
        }
    })

    const [cardMode, setCardMode] = useState<PokeCardMode>("Simple")
    const [hideCards, setHideCards] = useState(true)
    const [hideFilters, setHideFilters] = useState(false)

    const pokemons = infiniteQuery.data?.pages.flat() ?? []
    const pokemonsListRef = useRef<HTMLDivElement>(null)

    const windowDimensions = useWindowResize()
    const showToggleFilterButton = getShowToogleFilterButton(
        windowDimensions
    )

    const handleChangeSwitch = async (value: string) => {
        setHideCards(true)
        await delay(250)
        setCardMode(value as PokeCardMode)
        await delay(50)
        setHideCards(false)
    }

    useEffect(() => {
        if(infiniteQuery.isLoading) setHideCards(true)
        else setHideCards(false)
    }, [infiniteQuery.isLoading])

    return (
        <S.Screen>
            <S.Window>
                <S.Filters $hide={hideFilters}>
                    <PokemonSearch
                        onFind={(pokemonId) => {console.log(pokemonId)}}
                        label="Search a Pokémon by name or number"
                    />
                    <S.RightFilters>
                        <FavoriteCheckbox
                            label="Only Favorites"
                            onChange={(checked) => console.log(checked)}
                            onClick={() => infiniteQuery.fetchNextPage()}
                        />
                        <Switch
                            label="View Mode"
                            nameLeft="Simple"
                            nameRight="Detailed"
                            defaultValue="Simple"
                            onChange={handleChangeSwitch}
                        />
                    </S.RightFilters>
                </S.Filters>
                {showToggleFilterButton &&
                    <S.ToogleFilterButton
                        $hide={hideFilters}
                        onClick={() => setHideFilters(state => !state)}
                    />
                }
                {!infiniteQuery.isLoading && (
                    <PokemonsList
                        ref={pokemonsListRef}
                        pokemons={pokemons}
                        cardMode={cardMode}
                        hide={hideCards}
                        hasNextPage={infiniteQuery.hasNextPage}
                        fetchNextPage={infiniteQuery.fetchNextPage}
                        isFetchingNextPage={infiniteQuery.isFetchingNextPage}
                    />
                )}
            </S.Window>
        </S.Screen>
    )
}
