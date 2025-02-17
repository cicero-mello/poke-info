import { FunctionComponent as FC } from "preact"
import { PokemonSection } from "./components"
import { ScreenProps } from "../types"
import * as S from "./styles"

export const Mobile: FC<ScreenProps> = ({
    pokemonId,
    setPokemonId,
    // chosenVersionId,
    setChosenVersionId,
    // encountersPerVersionId,
    setEncountersPerVersionId
}) => {

    return (
        <S.Screen>
            <S.PageName>Find a Pokémon</S.PageName>
            <PokemonSection
                pokemonId={pokemonId}
                setPokemonId={setPokemonId}
                setChosenVersionId={setChosenVersionId}
                setEncountersPerVersionId={setEncountersPerVersionId}
            />
            {/* <VersionSection
                chosenVersionId={chosenVersionId}
                setChosenVersionId={setChosenVersionId}
            />
            <PlacesSection/>
            <NoEncountersSection /> */}
        </S.Screen>
    )
}
