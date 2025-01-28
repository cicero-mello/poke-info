import { useDocumentTitle, useNavigation, useWindowResize } from "@hooks"
import { pokeWindow, PokeWindow } from "@components"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "preact/hooks"
import { useRoute } from "preact-iso"
import { capitalize } from "@utils"
import * as S from "./styles"
import * as api from "@api"
import { Mobile } from "./mobile"
import { Desktop } from "./desktop"

export const Pokemon = () => {
    const { navigate } = useNavigation()
    const { params } = useRoute()
    const { data } = useQuery({
        queryKey: ["getPokemon", +params.id],
        queryFn: () => api.getPokemon({ idOrName: params.id }),
    })

    useEffect(() => {
        if(!+params.id) navigate("notfound", false)
    }, [])

    const titleName = (
        data?.name ? capitalize(data.name) : "Pokédex"
    )
    useDocumentTitle(titleName)

    const windowDimensions = useWindowResize()
    const isMobile = (
        windowDimensions.width <= pokeWindow.full.maxWidth
    )
    console.log(isMobile)

    return (
        <S.Screen>
            <PokeWindow>
                {isMobile ?
                    <Mobile pokemonMainType={data?.types[0] ?? "normal"}/> :
                    <Desktop pokemonMainType={data?.types[0] ?? "normal" }/>
                }
            </PokeWindow>
        </S.Screen>
    )
}
