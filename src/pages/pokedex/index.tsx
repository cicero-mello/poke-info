import { FavoriteCheckbox, PokemonSearch, Switch, PokeCardMode, PokemonsList, PokeWindow, PokemonData } from "@components"
import { useEffect, useMemo, useRef, useState } from "preact/hooks"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useNavigation, useWindowResize } from "@hooks"
import { getShowToogleFilterButton } from "./core"
import { customLocalStorage } from "@stores"
import { PATHS } from "@types"
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

    const { navigate } = useNavigation()
    const pokemonsListRef = useRef<HTMLDivElement>(null)
    const [cardMode, setCardMode] = useState<PokeCardMode>("Simple")
    const [hideCards, setHideCards] = useState(true)
    const [hideFilters, setHideFilters] = useState(false)
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)
    const [chosePokemon, setChosePokemon] = useState(0)

    const lastFavoritePokemons = useMemo(() => (
        customLocalStorage.getFavoritePokemons()
    ), [showOnlyFavorites])

    const pokemons = useMemo(() => {
        const queryPokemons = infiniteQuery.data?.pages.flat() ?? []
        if(!showOnlyFavorites) return queryPokemons

        return queryPokemons.filter(
            ({ pokemonId }) => lastFavoritePokemons.includes(pokemonId)
        )
    }, [showOnlyFavorites, infiniteQuery.data?.pages])

    const windowDimensions = useWindowResize()
    const showToggleFilterButton = getShowToogleFilterButton(
        windowDimensions
    )

    const handleChangeSwitch = async (value: string) => {
        setHideCards(true)
        await delay(250)
        setCardMode(value as PokeCardMode)
        await delay(100)
        setHideCards(false)
    }

    const handleChangeFavorite = async (checked: boolean) => {
        setHideCards(true)
        await delay(250)
        setShowOnlyFavorites(checked)
        await delay(100)
        setHideCards(false)
    }

    const handleClickPokeCard = async (pokemonId: number) => {
        setChosePokemon(pokemonId)
        await delay(420)
        navigate(
            PATHS.POKEDEX + "/" + pokemonId,
            false
        )
    }

    useEffect(() => {
        if(infiniteQuery.isLoading) setHideCards(true)
        else setHideCards(false)
    }, [infiniteQuery.isLoading])

    return (
        <S.Screen $chosePokemon={chosePokemon}>
            <PokeWindow>
                <S.Filters $hide={hideFilters}>
                    <PokemonSearch
                        onFind={handleClickPokeCard}
                        label="Search a Pokémon by name or number"
                    />
                    <S.RightFilters>
                        <FavoriteCheckbox
                            label="Only Favorites"
                            onChange={handleChangeFavorite}
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
                    <S.ToggleFilterButton
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
                        handleClickPokeCard={handleClickPokeCard}
                    />
                )}
                {!!chosePokemon &&
                    <PokemonData
                        previewMode
                        pokemonId={chosePokemon}
                    />
                }
            </PokeWindow>
        </S.Screen>
    )
}
