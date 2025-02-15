import { FunctionComponent as FC} from "preact"
import { useAnimation } from "./animations"
import { ScreenProps } from "../types"
import { useEffect } from "preact/hooks"
import * as C from "./components"
import * as S from "./styles"

export const Desktop: FC<ScreenProps> = ({
    pokemonId,
    setPokemonId,
    chosenVersionId,
    setChosenVersionId,
    encountersPerVersionId,
    setEncountersPerVersionId
}) => {
    const { refs, animations } = useAnimation()

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

    useEffect(() => {
        if(showNoEncountersCard){
            animations.hideNoEncountersFloatingCard()
            return
        }
        if(showVersionCard){
            animations.showVersionFloatingCard()
        }
        if(showPlacesCard){
            animations.showPlacesFloatingCard()
        }
    }, [])

    return (
        <S.Screen>
            <C.PokemonFloatingCard
                pokemonId={pokemonId}
                setPokemonId={setPokemonId}
                setEncountersPerVersionId={setEncountersPerVersionId}
                setChosenVersionId={setChosenVersionId}
                hideVersionFloatingCard={animations.hideVersionFloatingCard}
                showVersionFloatingCard={animations.showVersionFloatingCard}
                hideNoEncountersFloatingCard={animations.hideNoEncountersFloatingCard}
                showNoEncountersFloatingCard={animations.showNoEncountersFloatingCard}
                hidePlacesFloatingCard={animations.hidePlacesFloatingCard}
            />
            {showVersionCard &&
                <C.VersionFloatingCard
                    versionIds={[...encountersPerVersionId.keys()]}
                    chosenVersionId={chosenVersionId}
                    setChosenVersionId={setChosenVersionId}
                    hidePlacesFloatingCard={animations.hidePlacesFloatingCard}
                    showPlacesFloatingCard={animations.showPlacesFloatingCard}
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
                    componentRef={refs.placesFloatingCard}
                    encounters={encountersPerVersionId.get(chosenVersionId)!}
                />
            }
        </S.Screen>
    )
}
