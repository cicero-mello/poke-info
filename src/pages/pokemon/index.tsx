import { Evolution, Moves, PokemonLayout, PokemonMoreInfo, PokemonNameAndStats, PokeWindow, TabViewer } from "@components"
import { useDocumentTitle, useNavigation } from "@hooks"
import { useEffect, useState } from "preact/hooks"
import { useQuery } from "@tanstack/react-query"
import { capitalize, delay } from "@utils"
import { AnimationType } from "./types"
import { useRoute } from "preact-iso"
import * as S from "./styles"
import * as api from "@api"

export const Pokemon = () => {
    const { navigate } = useNavigation()
    const { params } = useRoute()
    const { data } = useQuery({
        queryKey: ["getPokemon", params.id],
        queryFn: () => api.getPokemon({ idOrName: params.id }),
    })

    const [animation, setAnimation] = useState<AnimationType>("init")

    useEffect(() => {
        if(!+params.id) navigate("notfound", false)
    }, [])

    const titleName = (
        data?.name ? capitalize(data.name) : "Pokédex"
    )
    useDocumentTitle(titleName)

    const revertAnimations = async () => {
        setAnimation("none")
        await delay(10)
        requestAnimationFrame(() => {
            setAnimation("returning")
        })
        await delay(400)
    }

    return (
        <S.Screen>
            <PokeWindow>
                <PokemonLayout
                    pokemonId={+params.id}
                    beforeReturnPokedex={revertAnimations}
                >
                    <S.LeftSide $animationType={animation}>
                        <S.Fan />
                        <PokemonNameAndStats pokeId={+params.id} bigMode />
                    </S.LeftSide>
                    <S.RightSide $animationType={animation}>
                        <TabViewer
                            pokemonType={data?.types[0] ?? "normal"}
                            tabNames={["More Info", "Evolution", "Moves"]}
                            tabPanels={[
                                <>
                                    {!!data &&
                                        <PokemonMoreInfo
                                            pokemonId={+params.id}
                                            pokemonName={data.name}
                                            specieId={data.specieId}
                                        />
                                    }
                                </>,
                                <Evolution />,
                                <Moves />
                            ]}
                        />
                    </S.RightSide>
                </PokemonLayout>
            </PokeWindow>
        </S.Screen>
    )
}
