import { gameImageUrlPerVersionName } from "@utils"
import { FunctionComponent as FC } from "preact"
import { VersionImageProps } from "./types"
import { useState } from "preact/hooks"
import { Button } from "@components"
import * as S from "./styles"

export const VersionImage: FC<VersionImageProps> = ({
    versionName, componentRef, onClick
}) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const url = (
        !versionName ? undefined :
        gameImageUrlPerVersionName.get(versionName)
    )

    return (
        <S.Component ref={componentRef}>
            <S.Title
                htmlFor={versionName+"-version-image"}
                children={versionName}
            />
            <Button
                id={versionName+"-version-image"}
                onClick={onClick}
            >
                <S.Image
                    src={url}
                    onLoad={() => setImageLoaded(true)}
                    $isLoaded={imageLoaded}
                    alt={versionName + " cover"}
                    loading="lazy"
                />
            </Button>
            {!imageLoaded && <S.ImageLoader />}
        </S.Component>
    )
}
