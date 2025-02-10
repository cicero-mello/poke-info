import { useLayoutEffect, useRef, useState } from "preact/hooks"
import { Button, FloatingCard, VersionImage } from "@components"
import { versionGroupIdPerVersionName } from "@utils"
import { VersionFloatingCardProps } from "./types"
import { FunctionComponent as FC } from "preact"
import { ArrowReturnIco } from "@assets"
import { VersionName } from "@types"
import * as S from "./styles"

export const VersionFloatingCard: FC<VersionFloatingCardProps> = ({
    pokemonId,
    versionGroupId,
    setVersionGroupId
}) => {
    const versionName = useRef<VersionName>(null)
    const [isToShowSettedVersion, setIsToShowSettedVersion] = useState(
        !!versionGroupId && !!versionName.current
    )

    useLayoutEffect(() => {
        if (pokemonId) return
        setVersionGroupId(0)
        setTimeout(() => {
            setIsToShowSettedVersion(false)
        }, 400)
    }, [pokemonId])

    const onReturnToList = () => {
        setVersionGroupId(0)
        setIsToShowSettedVersion(false)
    }

    return (
        <FloatingCard title="Version">
            <S.ContentWrapper>
                <Button
                    onClick={onReturnToList}
                    children={<ArrowReturnIco />}
                />
                {isToShowSettedVersion ?
                    <VersionImage
                        id="setted-version"
                        versionName={versionName.current!}
                    /> :
                    <S.VersionList>
                        {[...versionGroupIdPerVersionName].map(([key, value]) => (
                            <>
                                <VersionImage
                                    key={key}
                                    versionName={key}
                                    onClick={() => {
                                        versionName.current = key
                                        setVersionGroupId(value)
                                        setIsToShowSettedVersion(true)
                                    }}
                                />
                                <S.Line />
                            </>
                        ))}
                    </S.VersionList>
                }
            </S.ContentWrapper>
        </FloatingCard>
    )
}
