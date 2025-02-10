import { Button, CirclePokemonImage, CirclePokemonImageRef, FloatingCard, PokemonSearch, Spinner } from "@components"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { ArrowReturnIco, PikachuShadowIco } from "@assets"
import { PokemonFloatingCardProps } from "./types"
import { FunctionComponent as FC } from "preact"
import { useRef, useState } from "preact/hooks"
import { useAnimation } from "./animations"
import * as S from "./styles"
import * as api from "@api"

export const PokemonFloatingCard: FC<PokemonFloatingCardProps> = ({
    pokemonId,
    setPokemonId,
    hideVersionFloatingCard,
    showVersionFloatingCard
}) => {
    const pokeImgRef = useRef<CirclePokemonImageRef>(null)
    const [hideSpinner, setHideSpinner] = useState(true)
    const queryClient = useQueryClient()

    const { data } = useQuery({
        queryKey: ["getPokemon", pokemonId],
        queryFn: () => api.getPokemon({ idOrName: pokemonId + "" }),
        enabled: !!pokemonId
    })

    const { refs, animations } = useAnimation()

    const onFindPokemon = async (pokemonId: number) => {
        const showSpinnerTimeout = setTimeout(() => {
            setHideSpinner(false)
        }, 800)
        const pokemonQuery = queryClient.fetchQuery({
            queryKey: ["getPokemon", pokemonId],
            queryFn: () => api.getPokemon({ idOrName: pokemonId + "" })
        })
        await animations.hideSearch()
        await pokemonQuery
        setPokemonId(pokemonId)
        if(pokeImgRef.current) await pokeImgRef.current.loaded()
        clearTimeout(showSpinnerTimeout)
        setHideSpinner(true)
        await animations.showPokemon()
        showVersionFloatingCard()
        animations.showReturnButton()
    }

    const onReturnToSearch = async () => {
        const hidingReturnButtonPromise = animations.hideReturnButton()
        await hideVersionFloatingCard()
        await animations.hidePokemon()
        await hidingReturnButtonPromise
        setPokemonId(0)
        animations.showSearch()
    }

    return (
        <FloatingCard title="Pokémon">
            <S.ContentWrapper>
                <Spinner $hide={hideSpinner}/>
                <Button onClick={onReturnToSearch} componentRef={refs.returnButton}>
                    <ArrowReturnIco />
                </Button>
                <S.SearchWrapper ref={refs.searchWrapper}>
                    <PokemonSearch
                        label="Search for a name"
                        onFind={onFindPokemon}
                    />
                    <PikachuShadowIco />
                </S.SearchWrapper>
                <CirclePokemonImage
                    pokemonName={data?.name}
                    url={data?.imageUrl ?? ""}
                    type={data?.types[0]}
                    componentRef={refs.circlePokemonImage}
                    ref={pokeImgRef}
                />
            </S.ContentWrapper>
        </FloatingCard>
    )
}
