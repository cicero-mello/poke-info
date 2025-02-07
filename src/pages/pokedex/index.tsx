import { FavoriteCheckbox, PokemonSearch, Switch, PokeCardMode, PokemonsList, PokeWindow, PokemonLayout } from "@components"
import { useEffect, useMemo, useRef, useState } from "preact/hooks"
import { customLocalStorage, customSessionStorage } from "@stores"
import { delay, getRootFontSize, isPokemonPath } from "@utils"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useNavigation, useWindowResize } from "@hooks"
import { getShowToggleFilterButton } from "./core"
import { PATHS } from "@types"
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

    const { navigate, getPreviousPath } = useNavigation()

    const userWasInThisPokemonIdPage = useMemo(() => {
        return isPokemonPath(getPreviousPath())
    }, [])

    const pokedexRestorationData = useMemo(() => (
        customSessionStorage.getPokedexRestorationData()
    ), [])

    const pokemonsListRef = useRef<HTMLDivElement>(null)

    const [hideCards, setHideCards] = useState(true)
    const [hideFilters, setHideFilters] = useState(false)
    const [chosePokemon, setChosePokemon] = useState(0)

    const [cardMode, setCardMode] = useState<PokeCardMode>(
        pokedexRestorationData?.cardMode ?? "Simple"
    )

    const [showOnlyFavorites, setShowOnlyFavorites] = useState(
        !!pokedexRestorationData?.onlyFavorites
    )

    const lastFavoritePokemons = useMemo(() => (
        customLocalStorage.getFavoritePokemons()
    ), [showOnlyFavorites])

    const pokemonsIds = useMemo(() => {
        if(!showOnlyFavorites) {
            const queryPokemons = infiniteQuery.data?.pages.flat() ?? []
            return queryPokemons.map((pokemons) => pokemons.pokemonId)
        }

        return lastFavoritePokemons
    }, [showOnlyFavorites, infiniteQuery.data?.pages])

    const windowDimensions = useWindowResize()
    const showToggleFilterButton = getShowToggleFilterButton(
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
        if(pokemonsListRef.current){
            pokemonsListRef.current.scrollTop = 0
        }
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

    useEffect(() => {
        return () => {
            customSessionStorage.addPokedexRestorationData({
                scrollTop: pokemonsListRef.current?.scrollTop ?? 0,
                onlyFavorites: showOnlyFavorites,
                cardMode: cardMode
            })
        }
    }, [showOnlyFavorites, cardMode])

    const rootFontSize = getRootFontSize()
    const isPokemonPageAnimationPreviewMobile = (
        windowDimensions.width <= 760/16 * rootFontSize
    )

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
                            defaultChecked={showOnlyFavorites}
                        />
                        <Switch
                            label="View Mode"
                            nameLeft="Simple"
                            nameRight="Detailed"
                            defaultValue={cardMode}
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
                        pokemonsIds={pokemonsIds}
                        cardMode={cardMode}
                        hide={hideCards}
                        handleClickPokeCard={handleClickPokeCard}
                        hasNextPage={infiniteQuery.hasNextPage}
                        fetchNextPage={infiniteQuery.fetchNextPage}
                        isFetchingNextPage={infiniteQuery.isFetchingNextPage}
                        scrollTop={pokedexRestorationData?.scrollTop ?? 0}
                    />
                )}
                {!!chosePokemon &&
                    <PokemonLayout
                        isMobileMode={isPokemonPageAnimationPreviewMobile}
                        pokemonId={chosePokemon}
                    />
                }
                {!!userWasInThisPokemonIdPage && !!pokedexRestorationData &&
                    <PokemonLayout
                        isMobileMode={isPokemonPageAnimationPreviewMobile}
                        pokemonId={userWasInThisPokemonIdPage}
                        reverseAnimation
                    />
                }
            </PokeWindow>
        </S.Screen>
    )
}
