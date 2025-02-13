import { NoEncountersFloatingCardProps, } from "./types"
import { FunctionComponent as FC } from "preact"
import { FloatingCard } from "@components"
import * as S from "./styles"

export const NoEncountersFloatingCard: FC<NoEncountersFloatingCardProps> = ({
    componentRef
}) => {

    return (
        <FloatingCard
            title="Places"
            componentRef={componentRef}
            id="no-encounters-floating-card"
        >
            <S.ContentWrapper>
                No encounters
            </S.ContentWrapper>
        </FloatingCard>
    )
}
