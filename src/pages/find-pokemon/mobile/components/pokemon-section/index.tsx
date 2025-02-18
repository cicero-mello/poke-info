import { Button, CirclePokemonImage, CirclePokemonImageRef, PokemonSearch, Spinner } from "@components"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useRef, useState } from "preact/hooks"
import { ArrowReturnIco, PikachuShadowIco } from "@assets"
import { FunctionComponent as FC } from "preact"
import { PokemonSectionProps } from "./types"
import { useAnimation } from "./animations"
import * as S from "./styles"
import * as api from "@api"

export const PokemonSection: FC<PokemonSectionProps> = ({
    pokemonId,
    setPokemonId,
    setChosenVersionId,
    setEncountersPerVersionId,
    pageAnimations
}) => {
    const { refs, animations } = useAnimation()

    const pokeImgRef = useRef<CirclePokemonImageRef>(null)
    const [hideSpinner, setHideSpinner] = useState(true)
    const queryClient = useQueryClient()

    const { data } = useQuery({
        queryKey: ["getPokemon", pokemonId],
        queryFn: () => api.getPokemon({ idOrName: pokemonId + "" }),
        enabled: !!pokemonId
    })

    const onFindPokemon = async (pokemonId: number) => {
        const showSpinnerTimeout = setTimeout(() => {
            setHideSpinner(false)
        }, 800)

        const pokemonQuery = queryClient.fetchQuery({
            queryKey: ["getPokemon", pokemonId],
            queryFn: () => api.getPokemon({ idOrName: pokemonId + "" })
        })

        await animations.hideSearchWrapper()
        await pokemonQuery
        setPokemonId(pokemonId)

        if(pokeImgRef.current){
            await pokeImgRef.current.loaded()
        }

        const { encountersPerVersionId } = await queryClient.fetchQuery({
            queryKey: ["getPokemonLocationAreas", pokemonId],
            queryFn: () => api.getPokemonLocationAreas({ idOrName: pokemonId })
        })

        clearTimeout(showSpinnerTimeout)
        setEncountersPerVersionId(encountersPerVersionId)
        setHideSpinner(true)
        await animations.showPokemon()
        pageAnimations.showVersionSection()
    }

    const onReturnToSearch = async () => {
        await pageAnimations.hideVersionSection()
        await animations.hidePokemon()
        setPokemonId(0)
        setChosenVersionId(0)
        setEncountersPerVersionId(undefined)
        animations.showSearchWrapper()
    }

    useEffect(() => {
        if(pokemonId){
            onFindPokemon(pokemonId)
        }
    }, [])

    return (
        <S.Component>
            <Spinner $hide={hideSpinner} />
            <S.SearchWrapper ref={refs.searchWrapper}>
                <PokemonSearch
                    label="Search for a name or number"
                    onFind={onFindPokemon}
                />
                <PikachuShadowIco />
            </S.SearchWrapper>
            <CirclePokemonImage
                pokemonName={data?.name}
                url={data?.imageUrl ?? ""}
                type={data?.types[0]}
                ref={pokeImgRef}
                componentRef={refs.circlePokemonImage}
            />
            <Button
                onClick={onReturnToSearch}
                componentRef={refs.returnButton}
            >
                <ArrowReturnIco />
            </Button>
        </S.Component>
    )
}
