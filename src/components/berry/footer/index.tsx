import { FunctionComponent as FC } from "preact"
import { DiceIco, DoubleArrowIco } from "@assets"
import { useQuery } from "@tanstack/react-query"
import { Button } from "@components/button"
import { FooterProps } from "./types"
import { PATHS } from "@types"
import * as S from "./styles"
import * as api from "@api"

export const Footer: FC<FooterProps> = ({
    berryId, changeBerry
}) => {
    const { data } = useQuery({
        queryKey: ["getBerries"],
        queryFn: () => api.getBerries()
    })

    const finalBerryId = data?.total ?? 64

    const nextBerryId = (
        berryId === finalBerryId ? 1 : berryId + 1
    )

    const previousBerryId = (
        berryId === 1 ? finalBerryId : berryId - 1
    )

    const getRandomBerryId = () => {
        const randomBerryId = Math.round(Math.random() * (finalBerryId - 1)) + 1
        if(randomBerryId === berryId) return getRandomBerryId()
        return randomBerryId
    }

    const randomBerryId = getRandomBerryId()

    return (
        <S.Component>
            <Button
                theme="shadow"
                preventNavOnClick
                navigate={{path: PATHS.BERRIES + "/" + previousBerryId}}
                onClick={() => changeBerry(previousBerryId)}
                children={<DoubleArrowIco />}
            />
            <Button
                theme="shadow"
                preventNavOnClick
                navigate={{path: PATHS.BERRIES + "/" + randomBerryId}}
                onClick={() => changeBerry(randomBerryId)}
            >
                <DiceIco /> Random
            </Button>
            <Button
                theme="shadow"
                preventNavOnClick
                navigate={{path: PATHS.BERRIES + "/" + nextBerryId}}
                onClick={() => changeBerry(nextBerryId)}
                children={<DoubleArrowIco />}
            />
        </S.Component>
    )
}
