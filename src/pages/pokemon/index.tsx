import { PokemonLayout, PokemonNameAndStats, PokeWindow } from "@components"
import { useQuery } from "@tanstack/react-query"
import { useDocumentTitle } from "@hooks"
import { useRoute } from "preact-iso"
import { capitalize } from "@utils"
import * as S from "./styles"
import * as api from "@api"

export const Pokemon = () => {
    const  { params } = useRoute()
    const { data } = useQuery({
        queryKey: ["getPokemon", params.id],
        queryFn: () => api.getPokemon({ idOrName: params.id }),
    })

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
                </PokemonLayout>
            </PokeWindow>
        </S.Screen>
    )
}
