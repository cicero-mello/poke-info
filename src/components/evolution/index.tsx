import { useEffect, useLayoutEffect, useMemo, useState } from "preact/hooks"
import { CustomPokemonEvolution, EvolutionProps } from "./types"
import { useEvolutionQueries } from "./use-evolution-queries"
import { Spinner, EvolutionItem } from "@components"
import { FunctionComponent as FC } from "preact"
import { customSessionStorage } from "@stores"
import * as S from "./styles"

export const Evolution: FC<EvolutionProps> = ({
    pokemonId
}) => {
    const data = useEvolutionQueries(pokemonId)

    const isEvolutionDataCached = useMemo(() => (
        data ?
        customSessionStorage.isEvolutionCached(data.evolutionChainId)
        : false
    ), [])

    const [pixelArtsLoaded, setPixelArtsLoaded] = useState(
        isEvolutionDataCached ? [true] : [false]
    )
    const allPixelArtsWasLoaded = pixelArtsLoaded.every(Boolean)

    const updatePixelArtsLoadedArrayLenght = (
        pokemons: CustomPokemonEvolution[]
    ) => {
        setPixelArtsLoaded((state) => {
            if(state.length === pokemons.length) return state
            return pokemons.map(() => false)
        })
    }

    const updatePixelArtLoadedByArrayIndex = (index: number) => {
        setPixelArtsLoaded(state => state.map(
            (pixelArtLoaded, i) => (
                (i === index ? true : pixelArtLoaded)
            )
        ))
    }

    useLayoutEffect(() => {
        if(isEvolutionDataCached) return
        if(data?.pokemons && data.pokemons.length > 0){
            updatePixelArtsLoadedArrayLenght(data.pokemons)
        }
    }, [data])

    useEffect(() => {
        if(allPixelArtsWasLoaded && !!data){
            customSessionStorage.addEvolutionCachedId(
                data.evolutionChainId
            )
        }
    }, [pixelArtsLoaded])

    return (
        <S.Component $isLoading={!data || !allPixelArtsWasLoaded}>
            <Spinner />
            {data && data.pokemons.map((pokemon, index) => (
                <>
                    <EvolutionItem
                        {...pokemon}
                        onPixelArtLoad={() => {
                            updatePixelArtLoadedByArrayIndex(index)
                        }}
                    />
                    {index != data.pokemons.length - 1 && <S.Line />}
                </>
            ))}
        </S.Component>
    )
}
