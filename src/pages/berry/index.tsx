import { useQuery, useQueryClient } from "@tanstack/react-query"
import { BerryComponents, Button } from "@components"
import { useState } from "preact/hooks"
import { useRoute } from "preact-iso"
import { updateUrl } from "@utils"
import { PATHS } from "@types"
import * as S from "./styles"
import * as api from "@api"

export const Berry = () => {
    const { params } = useRoute()
    const [berryId, setBerryId] = useState(+params.id)
    const [_, setItemId] = useState(0)

    const queryClient = useQueryClient()
    const { data } = useQuery({
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
        setItemId(0)
    }

    const readItemData = async () => {
        updateUrl(`${PATHS.BERRIES}/${berryId}?item=${data?.itemId}`)
        setItemId(data?.itemId ?? 0)
    }

    return (
        <S.Screen>
            <S.BerryWindow>
                <BerryComponents.Header />
                <S.BerryData>
                    <S.TitleWrapper>
                        <h2> {data?.name} </h2>
                        <Button
                            children="Read More"
                            theme="smallTag"
                            preventNavOnClick
                            navigate={{path: `${PATHS.BERRIES}/${berryId}?item=${data?.itemId}`}}
                            onClick={readItemData}
                        />
                    </S.TitleWrapper>
                    <BerryComponents.BerryContent
                        naturalGiftType={data?.naturalGiftType}
                        smoothness={data?.smoothness}
                        firmness={data?.firmness}
                        size={data?.size}
                        naturalGiftPower={data?.naturalGiftPower}
                        soilDryness={data?.soilDryness}
                        grownTime={data?.grownTime}
                        maxHarvest={data?.maxHarvest}
                        flavors={data?.flavors}
                        pentagonSize={140}
                    />
                </S.BerryData>
                <BerryComponents.Footer
                    berryId={berryId}
                    changeBerry={changeBerry}
                />
            </S.BerryWindow>
        </S.Screen>
    )
}
