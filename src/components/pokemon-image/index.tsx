import { FunctionComponent as FC } from "preact"
import { PokemonImageProps } from "./types"
import { PikachuShadowIco } from "@assets"
import { useState } from "preact/hooks"
import * as S from "./styles"

export const PokemonImage: FC<PokemonImageProps> = ({
    imageUrl, alt
}) => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <S.Component $isImageLoaded={!isLoading}>
            <S.RelativeWrapper>
                {isLoading && <PikachuShadowIco />}
                <img
                    alt={alt ?? "Loading Pokemon..."}
                    src={imageUrl}
                    onLoad={() => setIsLoading(false)}
                />
            </S.RelativeWrapper>
        </S.Component>
    )
}
