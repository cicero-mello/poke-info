import { PokemonSection, VersionSection } from "./components"
import { FunctionComponent as FC } from "preact"
import { versionNamePerVersionId } from "@utils"
import { usePageAnimation } from "./animations"
import { ScreenProps } from "../types"
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

    return (
        <S.Screen>
            <S.PageName>Find a Pokémon</S.PageName>
            <PokemonSection
                pokemonId={pokemonId}
                setPokemonId={setPokemonId}
                setChosenVersionId={setChosenVersionId}
                setEncountersPerVersionId={setEncountersPerVersionId}
                pageAnimations={animations}
            />
            {showVersionCard &&
                <VersionSection
                    versionIds={[...versionNamePerVersionId.keys()]}
                    chosenVersionId={chosenVersionId}
                    setChosenVersionId={setChosenVersionId}
                    componentRef={refs.versionSection}
                />
            }
        </S.Screen>
    )
}
