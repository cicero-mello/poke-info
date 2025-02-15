import { EncountersPerVersionId } from "@api"
import { useWindowResize } from "@hooks"
import { useState } from "preact/hooks"
import { Desktop } from "./desktop"
import { Mobile } from "./mobile"

export const FindPokemon = () => {
    const windowDimensions = useWindowResize()
    const isMobileLayout = windowDimensions.width < 1000

    const [pokemonId, setPokemonId] = useState(0)
    const [chosenVersionId, setChosenVersionId] = useState(0)
    const [
        encountersPerVersionId,
        setEncountersPerVersionId
    ] = useState<EncountersPerVersionId>()

    if(isMobileLayout){
        return (
            <Mobile
                // pokemonId={pokemonId}
                // setPokemonId={setPokemonId}
                // chosenVersionId={chosenVersionId}
                // setChosenVersionId={setChosenVersionId}
                // encountersPerVersionId={encountersPerVersionId}
                // setEncountersPerVersionId={setEncountersPerVersionId}
            />
        )
    }

    return (
        <Desktop
            pokemonId={pokemonId}
            setPokemonId={setPokemonId}
            chosenVersionId={chosenVersionId}
            setChosenVersionId={setChosenVersionId}
            encountersPerVersionId={encountersPerVersionId}
            setEncountersPerVersionId={setEncountersPerVersionId}
        />
    )
}
