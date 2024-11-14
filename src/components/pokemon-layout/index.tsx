import { Button, FavoriteCheckbox, PokemonImage, TypeTag } from "@components"
import { useEffect, useState } from "preact/hooks"
import { FunctionComponent as FC } from "preact"
import { useQuery } from "@tanstack/react-query"
import { customLocalStorage } from "@stores"
import { PokemonLayoutProps } from "./types"
import { formatPokeNumber } from "@utils"
import { ArrowReturnIco } from "@assets"
import { useNavigation } from "@hooks"
import { useRoute } from "preact-iso"
import { PATHS } from "@types"
import * as S from "./styles"
import * as api from "@api"

export const PokemonLayout: FC<PokemonLayoutProps> = ({
    pokemonId, reverseAnimation, beforeReturnPokedex, children
}) => {
    const [reverseAnimationEnded, setReverseAnimationEnded] = useState(false)
    const [removePointerEvents, setRemovePointerEvents] = useState(false)

    const { navigate } = useNavigation()
    const { params } = useRoute()
    const pokeId = pokemonId ?? params.id
    const pokeNumber = formatPokeNumber(pokeId)?.toUpperCase()

    const { data } = useQuery({
        queryKey: ["getPokemon", pokemonId],
        queryFn: () => api.getPokemon({ idOrName: pokeId.toString() }),
    })

    const handleClickReturnPokedex = async () => {
        setRemovePointerEvents(true)
        if(beforeReturnPokedex) await beforeReturnPokedex()
        navigate(PATHS.POKEDEX, false)
    }

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

            <S.TopArea>
                <S.PokeNumber children={pokeNumber}/>
                <PokemonImage
                    imageUrl={data?.imageUrl ?? ""}
                    alt={data?.name ?? ""}
                    pokemonId={pokemonId}
                />
                <S.TagsAndFavorite>
                    <S.TypeTags>
                        {data?.types.map(type => <TypeTag pokemonType={type}/>)}
                    </S.TypeTags>
                    <FavoriteCheckbox
                        checked={customLocalStorage.getIsPokemonFavorited(data?.id ?? 0)}
                        onClick={() => {
                            customLocalStorage.toogleFavoriteOfPokemon(data?.id ?? 0)
                        }}
                    />
                </S.TagsAndFavorite>
                <Button
                    preventNavOnClick
                    navigate={{ path: PATHS.POKEDEX, transition: false }}
                    onClick={handleClickReturnPokedex}
                >
                    <ArrowReturnIco />
                </Button>
            </S.TopArea>

            <S.DownAreaContainer>
                <S.DownArea
                    $previewMode={!children}
                    $reverseAnimation={!!reverseAnimation}
                    $pokemonType={data?.types[0] ?? "normal"}
                >
                    {children && <S.Content>{children}</S.Content>}
                </S.DownArea>
            </S.DownAreaContainer>

        </S.Component>
    )
}
