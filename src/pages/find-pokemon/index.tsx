import { PokemonFloatingCard, VersionFloatingCard } from "./components"
import { useState } from "preact/hooks"
import { PageStep } from "./types"
import * as S from "./styles"

export const FindPokemon = () => {
    const [pokemonId, setPokemonId] = useState(0)
    const [versionGroupId, setVersionGroupId] = useState(0)

    const pageStep: PageStep = (
        versionGroupId ? "3" :
        pokemonId ? "2" : "1"
    )

    return (
        <S.Screen $pageStep={pageStep}>
            <PokemonFloatingCard
                pokemonId={pokemonId}
                setPokemonId={setPokemonId}
            />
            <VersionFloatingCard
                pokemonId={pokemonId}
                versionGroupId={versionGroupId}
                setVersionGroupId={setVersionGroupId}
            />
        </S.Screen>
    )
}
