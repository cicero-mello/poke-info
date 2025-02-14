import { PlacesFloatingCardProps } from "./types"
import { FunctionComponent as FC } from "preact"
import { EncounterPlace, FloatingCard } from "@components"
import * as S from "./styles"

export const PlacesFloatingCard: FC<PlacesFloatingCardProps> = ({
    componentRef,
    encounters
}) => (
    <FloatingCard
        title="Places"
        componentRef={componentRef}
    >
        <S.ContentWrapper>
            {encounters.map((encounter) => (
                encounter.methods.map((method) => (
                    <EncounterPlace
                        areaId={encounter.areaId}
                        method={method}
                    />
                ))
            ))}
        </S.ContentWrapper>
    </FloatingCard>
)
