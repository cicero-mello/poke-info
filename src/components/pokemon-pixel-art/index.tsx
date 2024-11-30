import { FunctionComponent as FC } from "preact"
import { PokemonPixelArtProps } from "./types"
import { Button } from "@components"
import { PATHS } from "@types"
import * as S from "./styles"

export const PokemonPixelArt: FC<PokemonPixelArtProps> = ({
    imageUrl, alt, pokemonId, onLoad
}) => (
    <S.Component>
        <Button
            tabIndex={0}
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
