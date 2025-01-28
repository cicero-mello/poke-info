import { TopAreaDesktop } from "./top-area-desktop"
import { useEffect, useState } from "preact/hooks"
import { TopAreaMobile } from "./top-area-mobile"
import { FunctionComponent as FC } from "preact"
import { useQuery } from "@tanstack/react-query"
import { PokemonLayoutProps } from "./types"
import { useRoute } from "preact-iso"
import * as S from "./styles"
import * as api from "@api"

export const PokemonLayout: FC<PokemonLayoutProps> = ({
    pokemonId, reverseAnimation, beforeReturnPokedex, isMobileMode,
    children
}) => {
    const [reverseAnimationEnded, setReverseAnimationEnded] = useState(false)
    const [removePointerEvents, setRemovePointerEvents] = useState(false)

    const { params } = useRoute()
    const pokeId = pokemonId ?? params.id

    const { data } = useQuery({
        queryKey: ["getPokemon", pokemonId],
        queryFn: () => api.getPokemon({ idOrName: pokeId.toString() }),
    })

    useEffect(() => {
        if(!!reverseAnimation){
            setTimeout(() => setReverseAnimationEnded(true), 800)
        }
    }, [reverseAnimation])

    if(reverseAnimationEnded) return <></>

    return (
        <S.Component
            $previewMode={!children}
            $reverseAnimation={!!reverseAnimation}
            $removePointerEvents={removePointerEvents || !children}
        >
            {isMobileMode ?
                <TopAreaMobile
                    pokemonData={data}
                    pokemonId={pokeId}
                    setRemovePointerEvents={setRemovePointerEvents}
                    beforeReturnPokedex={beforeReturnPokedex}
                /> :
                <TopAreaDesktop
                    pokemonData={data}
                    pokemonId={pokeId}
                    setRemovePointerEvents={setRemovePointerEvents}
                    beforeReturnPokedex={beforeReturnPokedex}
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
                        <S.Content $isMobileMode={isMobileMode}>
                                {children}
                        </S.Content>
                    }
                </S.DownArea>
            </S.DownAreaContainer>

        </S.Component>
    )
}
