import { useEncounterPlaces } from "../../../desktop/components/places-floating-card/use-encounter-places"
import { EncounterPlace, Spinner } from "@components"
import { useEffect, useState } from "preact/hooks"
import { FunctionComponent as FC } from "preact"
import { PlacesSectionProps } from "./types"
import * as S from "./styles"

export const PlacesSection: FC<PlacesSectionProps> = ({
    encounters,
    componentRef
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
        <S.Component ref={componentRef}>
            {showSpinner && <Spinner />}
            {encounterPlaces.map((encounter) => (
                encounter.methods.map((method) => (
                    <EncounterPlace
                        areaName={encounter.areaName}
                        method={method}
                    />
                ))
            ))}
        </S.Component>
    )
}
