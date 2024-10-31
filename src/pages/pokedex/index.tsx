import { FavoriteCheckbox, PokemonSearch, Switch, PokeCardMode, PokemonsList } from "@components"
import { useInfiniteQuery } from "@tanstack/react-query"
import { getShowToogleFilterButton } from "./core"
import { useRef, useState } from "preact/hooks"
import { useWindowResize } from "@hooks"
import { delay } from "@utils"
import * as S from "./styles"
import * as api from "@api"

export const Pokedex = () => {
    const { data, fetchNextPage, isFetching, isLoading } = useInfiniteQuery({
        queryKey: ['getPokemons'],
        initialPageParam: 0,
        queryFn: ({ pageParam = 0 }) => api.getPokemons({
            page: pageParam, limit: 19
        }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length === 0) return undefined
            return pages.length
        }
    })

    const [cardMode, setCardMode] = useState<PokeCardMode>("Simple")
    const [hideCards, setHideCards] = useState(false)
    const [hideFilters, setHideFilters] = useState(false)

    const pokemons = data?.pages.flat() ?? []
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
                            onClick={() => fetchNextPage()}
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
                {isLoading && <h3>isLoading...</h3>}
                {!isLoading && (
                    <PokemonsList
                        ref={pokemonsListRef}
                        pokemons={pokemons}
                        cardMode={cardMode}
                        hide={hideCards}
                    />
                )}
                {isFetching && <h3>Loading more pokemons...</h3> }
            </S.Window>
        </S.Screen>
    )
}
