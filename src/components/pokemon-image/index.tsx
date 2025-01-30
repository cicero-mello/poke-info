import { useEffect, useState } from "preact/hooks"
import { FunctionComponent as FC } from "preact"
import { customSessionStorage } from "@stores"
import { PokemonImageProps } from "./types"
import { PikachuShadowIco } from "@assets"
import * as S from "./styles"

export const PokemonImage: FC<PokemonImageProps> = ({
    imageUrl, alt, pokemonId, onLoad: onLoadProp
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
        if(onLoadProp) onLoadProp()
    }

    useEffect(() => {
        if(imageUrl === null){
            customSessionStorage.addLoadedPokemonArtworkIds(pokemonId)
        }
    }, [imageUrl])

    return (
        <S.Component
            $isImageLoaded={!isLoading}
            $nullImage={imageUrl === null}
        >
            <S.RelativeWrapper>
                {(isLoading || !imageUrl) && <PikachuShadowIco />}
                {!!imageUrl && (
                    <img
                        alt={alt ?? "Loading Pokemon..."}
                        src={imageUrl}
                        onLoad={onLoad}
                    />
                )}
            </S.RelativeWrapper>
        </S.Component>
    )
}
