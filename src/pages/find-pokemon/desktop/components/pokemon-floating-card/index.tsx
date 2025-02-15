import { Button, CirclePokemonImage, CirclePokemonImageRef, FloatingCard, PokemonSearch, Spinner } from "@components"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { ArrowReturnIco, PikachuShadowIco } from "@assets"
import { useEffect, useRef, useState } from "preact/hooks"
import { PokemonFloatingCardProps } from "./types"
import { FunctionComponent as FC } from "preact"
import { useAnimation } from "./animations"
import * as S from "./styles"
import * as api from "@api"

export const PokemonFloatingCard: FC<PokemonFloatingCardProps> = ({
    pokemonId,
    setPokemonId,
    setEncountersPerVersionId,
    setChosenVersionId,
    hideVersionFloatingCard,
    showVersionFloatingCard,
    hideNoEncountersFloatingCard,
    showNoEncountersFloatingCard,
    hidePlacesFloatingCard
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

        const { encountersPerVersionId } = await queryClient.fetchQuery({
            queryKey: ["getPokemonLocationAreas", pokemonId],
            queryFn: () => api.getPokemonLocationAreas({ idOrName: pokemonId })
        })
        setEncountersPerVersionId(encountersPerVersionId)

        const haveEncounter = (
            !!encountersPerVersionId &&
            encountersPerVersionId.size > 0
        )

        clearTimeout(showSpinnerTimeout)
        setHideSpinner(true)

        await animations.showPokemon()
        animations.showReturnButton()

        if(haveEncounter) showVersionFloatingCard()
        else showNoEncountersFloatingCard()
    }

    const onReturnToSearch = async () => {
        const hidingReturnButtonPromise = animations.hideReturnButton()
        hideNoEncountersFloatingCard()
        hidePlacesFloatingCard()
        await hideVersionFloatingCard()
        await animations.hidePokemon()
        await hidingReturnButtonPromise
        setPokemonId(0)
        setChosenVersionId(0)
        setEncountersPerVersionId(undefined)
        animations.showSearch()
    }

    useEffect(() => {
        if(pokemonId){
            onFindPokemon(pokemonId)
        }
    }, [])

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
