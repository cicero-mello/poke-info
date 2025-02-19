import { useEffect, useLayoutEffect, useRef, useState } from "preact/hooks"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { TopAreaDesktop } from "./top-area-desktop"
import { delay, scrollElementToTop } from "@utils"
import { TopAreaMobile } from "./top-area-mobile"
import { FunctionComponent as FC } from "preact"
import { PokemonLayoutContext } from "./context"
import { PokemonLayoutProps } from "./types"
import { useNavigation } from "@hooks"
import { useRoute } from "preact-iso"
import { PATHS } from "@types"
import * as S from "./styles"
import * as api from "@api"

export const PokemonLayout: FC<PokemonLayoutProps> = ({
    pokemonId, reverseAnimation, beforeReturnPokedex, isMobileMode,
    children
}) => {
    const { params } = useRoute()
    const { navigate } = useNavigation()
    const contentRef = useRef<HTMLDivElement>(null)
    const [reverseAnimationEnded, setReverseAnimationEnded] = useState(false)
    const [removePointerEvents, setRemovePointerEvents] = useState(false)
    const [pokeId, setPokeId] = useState(pokemonId ?? params.id)
    const [prepareToChangePokemon, setPrepareToChangePokemon] = useState(false)

    const queryClient = useQueryClient()
    const { data } = useQuery({
        queryKey: ["getPokemon", pokeId],
        queryFn: () => api.getPokemon({ idOrName: pokeId.toString() }),
    })

    useEffect(() => {
        if(!!reverseAnimation){
            setTimeout(() => setReverseAnimationEnded(true), 800)
        }
    }, [reverseAnimation])

    const changePokemon = async (id: number) => {
        if(id === pokeId) return
        await queryClient.fetchQuery({
            queryKey: ["getPokemon", id],
            queryFn: () => api.getPokemon({ idOrName: id.toString() }),
        })
        setPrepareToChangePokemon(true)
        await delay(300)
        scrollElementToTop(contentRef.current!)
        setPokeId(id)
        navigate(PATHS.POKEDEX + "/" + id, false)
    }

    const onLoadImageWhenPokemonChanges = () => {
        setPrepareToChangePokemon(false)
    }

    useLayoutEffect(() => {
        setPokeId(pokemonId ?? params.id)
    }, [pokemonId, params.id])

    if(reverseAnimationEnded) return <></>

    return (
        <S.Component
            $previewMode={!children}
            $reverseAnimation={!!reverseAnimation}
            $removePointerEvents={removePointerEvents || !children}
            $prepareToChangePokemon={prepareToChangePokemon}
            $isMobileMode={!!isMobileMode}
        >
            {isMobileMode ?
                <TopAreaMobile
                    pokemonData={data}
                    pokemonId={pokeId}
                    setRemovePointerEvents={setRemovePointerEvents}
                    beforeReturnPokedex={beforeReturnPokedex}
                    onLoadImage={onLoadImageWhenPokemonChanges}
                /> :
                <TopAreaDesktop
                    pokemonData={data}
                    pokemonId={pokeId}
                    setRemovePointerEvents={setRemovePointerEvents}
                    beforeReturnPokedex={beforeReturnPokedex}
                    onLoadImage={onLoadImageWhenPokemonChanges}
                />
            }
            <S.DownAreaContainer>
                <S.DownArea
                    $isMobileMode={!!isMobileMode}
                    $previewMode={!children}
                    $reverseAnimation={!!reverseAnimation}
                    $pokemonType={data?.types[0] ?? "normal"}
                >
                    {children &&
                        <S.Content
                            ref={contentRef}
                            $isMobileMode={!!isMobileMode}
                            $pokemonType={data?.types[0] ?? "normal"}
                        >
                            <PokemonLayoutContext.Provider value={{changePokemon}}>
                                {children}
                            </PokemonLayoutContext.Provider>
                        </S.Content>
                    }
                </S.DownArea>
            </S.DownAreaContainer>

        </S.Component>
    )
}
