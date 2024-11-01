import { FunctionComponent as FC } from "preact"
import { customSessionStorage } from "@stores"
import { PokemonImageProps } from "./types"
import { PikachuShadowIco } from "@assets"
import { useState } from "preact/hooks"
import * as S from "./styles"

export const PokemonImage: FC<PokemonImageProps> = ({
    imageUrl, alt, pokemonId
}) => {
    const startLoading = !(
        customSessionStorage.getIsPokemonArtworkLoaded(pokemonId)
    )

    const [isLoading, setIsLoading] = useState(
        startLoading
    )

    const onLoad = () => {
        setIsLoading(false)
        customSessionStorage.addLoadedPokemonArtworkIds(pokemonId)
    }

    return (
        <S.Component $isImageLoaded={!isLoading}>
            <S.RelativeWrapper>
                {isLoading && <PikachuShadowIco />}
                <img
                    alt={alt ?? "Loading Pokemon..."}
                    src={imageUrl}
                    onLoad={onLoad}
                />
            </S.RelativeWrapper>
        </S.Component>
    )
}
