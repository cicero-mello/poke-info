import { Button, usePokemonLayoutContext } from "@components"
import { FunctionComponent as FC } from "preact"
import { PokemonPixelArtProps } from "./types"
import { PATHS } from "@types"
import * as S from "./styles"

export const PokemonPixelArt: FC<PokemonPixelArtProps> = ({
    imageUrl, alt, pokemonId, onLoad
}) => {
    const { changePokemon } = usePokemonLayoutContext()

    return (
        <S.Component>
            <Button
                tabIndex={0}
                onClick={() => changePokemon(pokemonId)}
                preventNavOnClick
                navigate={{
                    path: PATHS.POKEDEX + "/" + pokemonId,
                    transition: false
                }}
            >
                <img
                    alt={alt ?? "Pokemon Pixel Art"}
                    src={imageUrl}
                    onLoad={onLoad}
                />
            </Button>
        </S.Component>
    )
}
