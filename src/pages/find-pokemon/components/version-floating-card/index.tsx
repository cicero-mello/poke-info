import { Button, FloatingCard, VersionImage } from "@components"
import { useEffect, useRef, useState } from "preact/hooks"
import { VersionFloatingCardProps } from "./types"
import { versionNamePerVersionId } from "@utils"
import { FunctionComponent as FC } from "preact"
import { useAnimation } from "./animations"
import { ArrowReturnIco } from "@assets"
import { VersionName } from "@types"
import * as S from "./styles"

export const VersionFloatingCard: FC<VersionFloatingCardProps> = ({
    versionIds,
    chosenVersionId,
    setChosenVersionId,
    componentRef,
    showPlacesFloatingCard,
    hidePlacesFloatingCard
}) => {
    const { refs, animations } = useAnimation()

    const versionName = useRef<VersionName>(null)
    const [isToShowSettedVersion, setIsToShowSettedVersion] = useState(
        !!chosenVersionId && !!versionName.current
    )

    const onReturnToList = async () => {
        const hidingPlacesCard = hidePlacesFloatingCard()
        await animations.hideSettedVersion()
        await hidingPlacesCard
        setChosenVersionId(0)
        setIsToShowSettedVersion(false)
    }

    useEffect(() => {
        if(isToShowSettedVersion) {
            animations.showSettedVersion()
            showPlacesFloatingCard()
            return
        }
        animations.showVersionList()
    }, [isToShowSettedVersion])

    return (
        <FloatingCard
            title="Version"
            componentRef={componentRef}
        >
            <S.ContentWrapper>
                {isToShowSettedVersion ?
                    <>
                        <Button
                            onClick={onReturnToList}
                            children={<ArrowReturnIco />}
                            componentRef={refs.returnButton}
                        />
                        <VersionImage
                            id="setted-version"
                            versionName={versionName.current!}
                            componentRef={refs.settedVersionRef}
                        />
                    </> :
                    <S.VersionList ref={refs.versionList}>
                        {versionIds.map((versionId) => (
                            <>
                                <VersionImage
                                    key={`version-image-${versionId}`}
                                    versionName={versionNamePerVersionId.get(versionId)!}
                                    onClick={async () => {
                                        versionName.current = versionNamePerVersionId.get(versionId)!
                                        await animations.hideVersionList()
                                        setChosenVersionId(versionId)
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
