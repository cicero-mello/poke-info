import { BerriesComponents } from "@components"
import { useQuery } from "@tanstack/react-query"
import { useState } from "preact/hooks"
import * as S from "./styles"
import * as api from "@api"

export const Berries = () => {
    const [berryId] = useState(4)

    const { data } = useQuery({
        queryKey: ["getBerry", berryId],
        queryFn: () => api.getBerry({ idOrName: berryId })
    })

    return (
        <S.Screen>
            <S.BerryWindow>
                <BerriesComponents.Header />
                <S.BerryData>
                    {JSON.stringify(data, null, 4)}
                </S.BerryData>
                <S.BottomWrapper>
                </S.BottomWrapper>
            </S.BerryWindow>
        </S.Screen>
    )
}
