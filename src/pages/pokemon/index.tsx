import { Evolution, Moves, PokemonLayout, PokemonMoreInfo, PokemonNameAndStats, PokeWindow, TabViewer } from "@components"
import { useDocumentTitle, useNavigation } from "@hooks"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "preact/hooks"
import { useRoute } from "preact-iso"
import { capitalize } from "@utils"
import * as S from "./styles"
import * as api from "@api"

export const Pokemon = () => {
    const { navigate } = useNavigation()
    const  { params } = useRoute()
    const { data } = useQuery({
        queryKey: ["getPokemon", params.id],
        queryFn: () => api.getPokemon({ idOrName: params.id }),
    })

    useEffect(() => {
        if(!+params.id) navigate("notfound", false)
    }, [])

    const titleName = (
        data?.name ? capitalize(data.name) : "Pokédex"
    )
    useDocumentTitle(titleName)

    return (
        <S.Screen>
            <PokeWindow>
                <PokemonLayout pokemonId={+params.id}>
                    <S.RightSide>
                        <S.Fan />
                        <PokemonNameAndStats pokeId={+params.id} bigMode />
                    </S.RightSide>
                    <S.LeftSide>
                        <TabViewer
                            pokemonType={data?.types[0] ?? "normal"}
                            tabNames={["More Info", "Evolution", "Moves"]}
                            tabPanels={[
                                <PokemonMoreInfo />,
                                <Evolution />,
                                <Moves />
                            ]}
                        />
                    </S.LeftSide>
                </PokemonLayout>
            </PokeWindow>
        </S.Screen>
    )
}
