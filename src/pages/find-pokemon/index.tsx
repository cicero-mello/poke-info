import * as S from "./styles"
import { PokemonFloatingCard } from "./components"
import { useState } from "preact/hooks"

export const FindPokemon = () => {
    const [pokemonId, setPokemonId] = useState(0)

    return (
        <S.Screen>
            <PokemonFloatingCard
                pokemonId={pokemonId}
                setPokemonId={setPokemonId}
            />
        </S.Screen>
    )
}
