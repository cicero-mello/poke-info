import { useAnimation } from "./animations"
import { useState } from "preact/hooks"
import * as C from "./components"
import * as S from "./styles"
import * as api from "@api"

export const FindPokemon = () => {
    const { refs, animations } = useAnimation()

    const [chosenVersionId, setChosenVersionId] = useState(0)
    const [
        encountersPerVersionId,
        setEncountersPerVersionId
    ] = useState<api.EncountersPerVersionId>()

    const showVersionCard = (
        !!encountersPerVersionId &&
        encountersPerVersionId.size > 0
    )

    const showNoEncountersCard = (
        !!encountersPerVersionId &&
        encountersPerVersionId.size === 0
    )

    const showPlacesCard = (
        !!chosenVersionId &&
        !!encountersPerVersionId
    )

    return (
        <S.Screen>
            <C.PokemonFloatingCard
                setEncountersPerVersionId={setEncountersPerVersionId}
                setChosenVersionId={setChosenVersionId}
                hideVersionFloatingCard={animations.hideVersionFloatingCard}
                showVersionFloatingCard={animations.showVersionFloatingCard}
                hideNoEncountersFloatingCard={animations.hideNoEncountersFloatingCard}
                showNoEncountersFloatingCard={animations.showNoEncountersFloatingCard}
            />
            {showVersionCard &&
                <C.VersionFloatingCard
                    versionIds={[...encountersPerVersionId.keys()]}
                    chosenVersionId={chosenVersionId}
                    setChosenVersionId={setChosenVersionId}
                    componentRef={refs.versionFloatingCard}
                />
            }
            {showNoEncountersCard &&
                <C.NoEncountersFloatingCard
                    componentRef={refs.noEncountersFloatingCard}
                />
            }
            {showPlacesCard &&
                <C.PlacesFloatingCard
                    encounters={encountersPerVersionId.get(chosenVersionId)!}
                />
            }
        </S.Screen>
    )
}
