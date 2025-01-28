import { useDocumentTitle, useNavigation, useWindowResize } from "@hooks"
import { capitalize, getRootFontSize } from "@utils"
import { useQuery } from "@tanstack/react-query"
import { PokeWindow } from "@components"
import { useEffect } from "preact/hooks"
import { useRoute } from "preact-iso"
import { Desktop } from "./desktop"
import { Mobile } from "./mobile"
import * as S from "./styles"
import * as api from "@api"

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

    const titleName = data?.name ? capitalize(data.name) : "Pokédex"
    useDocumentTitle(titleName)

    const windowDimensions = useWindowResize()
    const rootFontSize = getRootFontSize()
    const isMobile = windowDimensions.width <= 760/16 * rootFontSize

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
