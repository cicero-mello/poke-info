import { BerriesComponents, Button, FlavorsGraph } from "@components"
import { DiceIco, DoubleArrowIco } from "@assets"
import { useQuery } from "@tanstack/react-query"
import { useState } from "preact/hooks"
import { PATHS } from "@types"
import * as S from "./styles"
import * as api from "@api"

export const Berries = () => {
    const [berryId] = useState(33)

    const { data } = useQuery({
        queryKey: ["getBerry", berryId],
        queryFn: () => api.getBerry({ idOrName: berryId })
    })

    return (
        <S.Screen>
            <S.BerryWindow>
                <BerriesComponents.Header />
                <S.BerryData>
                    {/* {JSON.stringify(data, null, 4)} */}
                    <FlavorsGraph flavors={data?.flavors}/>
                </S.BerryData>
                <S.Footer>
                    <Button
                        theme="shadow"
                        preventNavOnClick
                        navigate={{path: PATHS.HOME}}
                        children={<DoubleArrowIco />}
                    />
                    <Button
                        theme="shadow"
                        preventNavOnClick
                        navigate={{path: PATHS.HOME}}
                    >
                        <DiceIco /> Random
                    </Button>
                    <Button
                        theme="shadow"
                        preventNavOnClick
                        navigate={{path: PATHS.HOME}}
                        children={<DoubleArrowIco />}
                    />
                </S.Footer>
            </S.BerryWindow>
        </S.Screen>
    )
}
