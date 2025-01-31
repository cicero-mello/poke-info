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
                <S.TopWrapper>
                    <S.Title> Berries </S.Title>
                    <S.Description>
                        Berries are small fruits that can provide HP
                        and status condition restoration, stat enhancement,
                        and even damage negation when eaten by Pokémon.
                    </S.Description>
                </S.TopWrapper>
                <S.BerryData>
                    {JSON.stringify(data, null, 4)}
                </S.BerryData>
                <S.BottomWrapper>
                </S.BottomWrapper>
            </S.BerryWindow>
        </S.Screen>
    )
}
