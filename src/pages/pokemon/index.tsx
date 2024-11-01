import { useQuery } from "@tanstack/react-query"
import { useDocumentTitle } from "@hooks"
import { PokemonData, PokeWindow } from "@components"
import { useRoute } from "preact-iso"
import * as S from "./styles"
import * as api from "@api"

export const Pokemon = () => {
    const  { params } = useRoute()
    const { data } = useQuery({
        queryKey: ["getPokemon", params.id],
        queryFn: () => api.getPokemon({ idOrName: params.id }),
    })

    useDocumentTitle(data?.name ??  "Loading Pokemon...")

    return (
        <S.Screen>
            <PokeWindow>
                <PokemonData pokemonId={+params.id}/>
            </PokeWindow>
        </S.Screen>
    )
}
