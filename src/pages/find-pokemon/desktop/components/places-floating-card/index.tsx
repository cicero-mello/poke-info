import { EncounterPlace, FloatingCard, Spinner } from "@components"
import { useEncounterPlaces } from "./use-encounter-places"
import { useEffect, useState } from "preact/hooks"
import { PlacesFloatingCardProps } from "./types"
import { FunctionComponent as FC } from "preact"
import * as S from "./styles"

export const PlacesFloatingCard: FC<PlacesFloatingCardProps> = ({
    componentRef,
    encounters
}) => {
    const encounterPlaces = useEncounterPlaces(encounters)
    const [showSpinner, setShowSpinner] = useState(false)

    useEffect(() => {
        const isLoading = encounterPlaces.length === 0
        const showSpinnerTimeout = setTimeout(() => {
            setShowSpinner(true)
        }, 1500)
        if(!isLoading){
            setShowSpinner(false)
            clearTimeout(showSpinnerTimeout)
        }
        return () => clearTimeout(showSpinnerTimeout)
    }, [encounterPlaces])

    return (
        <FloatingCard
            title="Places"
            componentRef={componentRef}
        >
            <S.ContentWrapper>
                {showSpinner && <Spinner />}
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
