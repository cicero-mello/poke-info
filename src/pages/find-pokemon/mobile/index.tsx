import { FunctionComponent as FC } from "preact"
import { usePageAnimation } from "./animations"
import { useEffect } from "preact/hooks"
import { ScreenProps } from "../types"
import * as C from "./components"
import * as S from "./styles"

export const Mobile: FC<ScreenProps> = ({
    pokemonId,
    setPokemonId,
    chosenVersionId,
    setChosenVersionId,
    encountersPerVersionId,
    setEncountersPerVersionId
}) => {
    const { refs, animations } = usePageAnimation()

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
            animations.showNoEncountersSection()
            return
        }
        if(showVersionCard){
            animations.showVersionSection()
        }
        if(showPlacesCard){
            animations.showPlacesSection()
        }
    }, [])

    return (
        <S.Screen>
            <S.PageName>Find a Pokémon</S.PageName>
            <C.PokemonSection
                pokemonId={pokemonId}
                setPokemonId={setPokemonId}
                setChosenVersionId={setChosenVersionId}
                setEncountersPerVersionId={setEncountersPerVersionId}
                pageAnimations={animations}
            />
            {showVersionCard &&
                <C.VersionSection
                    versionIds={[...encountersPerVersionId.keys()]}
                    chosenVersionId={chosenVersionId}
                    setChosenVersionId={setChosenVersionId}
                    componentRef={refs.versionSection}
                    pageAnimations={animations}
                />
            }
            {showNoEncountersCard &&
                <C.NoEncountersSection
                    componentRef={refs.noEncountersSection}
                />
            }
            {showPlacesCard &&
                <C.PlacesSection
                    componentRef={refs.placesSection}
                    encounters={encountersPerVersionId.get(chosenVersionId)!}
                />
            }
        </S.Screen>
    )
}
