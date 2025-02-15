import { FunctionComponent as FC } from "preact"
import { PokemonSectionProps } from "./types"

export const PokemonSection: FC<PokemonSectionProps> = ({
    pokemonId,
    // setPokemonId
}) => {

    return (
        <p>Pokemon Section {pokemonId}</p>
    )
}
