import { useEncounterPlaces } from "./use-encounter-places"
import { EncounterPlace, FloatingCard } from "@components"
import { PlacesFloatingCardProps } from "./types"
import { FunctionComponent as FC } from "preact"
import * as S from "./styles"

export const PlacesFloatingCard: FC<PlacesFloatingCardProps> = ({
    componentRef,
    encounters
}) => {
    const encounterPlaces = useEncounterPlaces(encounters)
    const isLoading = encounterPlaces.length === 0

    return (
        <FloatingCard
            title="Places"
            componentRef={componentRef}
        >
            <S.ContentWrapper>
                {encounterPlaces.map((encounter) => (
                    encounter.methods.map((method) => (
                        <EncounterPlace
                            areaName={encounter.areaName}
                            method={method}
                        />
                    ))
                ))}
            </S.ContentWrapper>
        </FloatingCard>
    )
}
