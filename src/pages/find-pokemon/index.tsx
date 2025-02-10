import { PokemonFloatingCard, VersionFloatingCard } from "./components"
import { useAnimation } from "./animations"
import { useState } from "preact/hooks"
import * as S from "./styles"

export const FindPokemon = () => {
    const { refs, animations } = useAnimation()

    const [pokemonId, setPokemonId] = useState(0)
    const [versionGroupId, setVersionGroupId] = useState(0)

    return (
        <S.Screen>
            <PokemonFloatingCard
                pokemonId={pokemonId}
                setPokemonId={setPokemonId}
                hideVersionFloatingCard={animations.hideVersionFloatingCard}
                showVersionFloatingCard={animations.showVersionFloatingCard}
            />
            {!!pokemonId &&
                <VersionFloatingCard
                    pokemonId={pokemonId}
                    versionGroupId={versionGroupId}
                    setVersionGroupId={setVersionGroupId}
                    componentRef={refs.versionFloatingCard}
                />
            }
        </S.Screen>
    )
}
