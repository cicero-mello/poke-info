import { BerryComponents, FlavorsGraph } from "@components"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "preact/hooks"
import { useRoute } from "preact-iso"
import { updateUrl } from "@utils"
import { PATHS } from "@types"
import * as S from "./styles"
import * as api from "@api"

export const Berry = () => {
    const { params } = useRoute()
    const [berryId, setBerryId] = useState(+params.id)

    const queryClient = useQueryClient()
    const berryQuery = useQuery({
        queryKey: ["getBerry", berryId],
        queryFn: () => api.getBerry({ idOrName: berryId })
    })

    const changeBerry = async (newBerryId: number) => {
        await queryClient.fetchQuery({
            queryKey: ["getBerry", newBerryId],
            queryFn: () => api.getBerry({ idOrName: newBerryId })
        })
        updateUrl(PATHS.BERRIES + "/" + newBerryId)
        setBerryId(newBerryId)
    }

    return (
        <S.Screen>
            <S.BerryWindow>
                <BerryComponents.Header />
                <S.BerryData>
                    <FlavorsGraph flavors={berryQuery.data?.flavors} />
                </S.BerryData>
                <BerryComponents.Footer
                    berryId={berryId}
                    changeBerry={changeBerry}
                />
            </S.BerryWindow>
        </S.Screen>
    )
}
