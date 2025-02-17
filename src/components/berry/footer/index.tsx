import { useQuery, useQueryClient } from "@tanstack/react-query"
import { FunctionComponent as FC } from "preact"
import { DiceIco, DoubleArrowIco } from "@assets"
import { Button, SearchInput } from "@components"
import { retractMobileKeyboard } from "@utils"
import { FooterProps } from "./types"
import { PATHS } from "@types"
import * as S from "./styles"
import * as api from "@api"

export const Footer: FC<FooterProps> = ({
    berryId, changeBerry
}) => {
    const queryClient = useQueryClient()
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

    const onSearch = async (value: string) => {
        try {
            const { id } = await queryClient.fetchQuery({
                queryKey: ["getBerry", value],
                queryFn: () => api.getBerry({ idOrName: value })
            })
            if(id){
                changeBerry(id, "bottom")
                retractMobileKeyboard()
            }
            return { notFound: !id }
        } catch (error) {
            return { notFound: true }
        }
    }

    return (
        <S.Component>
            <SearchInput onSearch={onSearch}/>
            <S.ButtonsWrapper>
                <Button
                    theme="shadow"
                    preventNavOnClick
                    navigate={{path: PATHS.BERRIES + "/" + previousBerryId}}
                    onClick={() => changeBerry(previousBerryId, "left")}
                    children={<DoubleArrowIco />}
                />
                <Button
                    theme="shadow"
                    preventNavOnClick
                    navigate={{path: PATHS.BERRIES + "/" + randomBerryId}}
                    onClick={() => changeBerry(randomBerryId, "bottom")}
                >
                    <DiceIco /> Random
                </Button>
                <Button
                    theme="shadow"
                    preventNavOnClick
                    navigate={{path: PATHS.BERRIES + "/" + nextBerryId}}
                    onClick={() => changeBerry(nextBerryId, "right")}
                    children={<DoubleArrowIco />}
                />
            </S.ButtonsWrapper>
        </S.Component>
    )
}
