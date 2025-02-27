import { getRootFontSize, scrollElementToBottom, scrollElementToTop, versionNamePerVersionId } from "@utils"
import { useEffect, useRef, useState } from "preact/hooks"
import { useHasScrollX, useMomentumScrollX } from "@hooks"
import { Button, VersionImage } from "@components"
import { FunctionComponent as FC } from "preact"
import { VersionSectionProps } from "./types"
import { useAnimation } from "./animations"
import { ArrowReturnIco } from "@assets"
import { VersionName } from "@types"
import * as S from "./styles"

export const VersionSection: FC<VersionSectionProps> = ({
    versionIds,
    chosenVersionId,
    setChosenVersionId,
    pageAnimations,
    componentRef
}) => {
    const needToScrollBottom = useRef(false)
    const momentumScrollX = useMomentumScrollX()
    const hasScroll = useHasScrollX(momentumScrollX.carouselRef)
    const { refs, animations } = useAnimation()

    const versionName = useRef<VersionName>(null)
    const [isToShowSettedVersion, setIsToShowSettedVersion] = useState(
        !!chosenVersionId && !!versionName.current
    )

    const onChooseVersion = async (versionId: number) => {
        versionName.current = versionNamePerVersionId.get(versionId)!
        await animations.hideVersionList()
        setChosenVersionId(versionId)
        setIsToShowSettedVersion(true)
    }

    const onReturnToList = async () => {
        animations.hideReturnButton()
        await pageAnimations.hidePlacesSection()
        await animations.hideSettedVersion()
        await scrollElementToTop(document.getElementById("screen")!)
        needToScrollBottom.current = true
        setChosenVersionId(0)
        setIsToShowSettedVersion(false)
    }

    useEffect(() => {
        const showSettedVersionAndPlacesSection = async () => {
            await animations.showSettedVersion()
            pageAnimations.showPlacesSection()

            const screen = document.getElementById("screen")!
            const rootFontSize = getRootFontSize()
            await scrollElementToBottom(screen, 400 * rootFontSize / 16)
        }

        if(isToShowSettedVersion){
            showSettedVersionAndPlacesSection()
            return
        }

        if(needToScrollBottom.current){
            needToScrollBottom.current = false
            scrollElementToBottom(document.getElementById("screen")!)
        }

        animations.showVersionList()
    }, [isToShowSettedVersion])

    useEffect(() => {
        if(chosenVersionId){
            onChooseVersion(chosenVersionId)
        }
    }, [])

    return (
        <S.Component ref={componentRef}>
            {!isToShowSettedVersion &&
                <S.VersionListWrapper ref={refs.versionListWrapper}>
                    <S.Title> Choose a Version </S.Title>
                    <S.VersionList
                        ref={momentumScrollX.carouselRef}
                        onMouseDown={momentumScrollX.onMouseDown}
                        onMouseUp={momentumScrollX.onMouseUp}
                        onMouseLeave={momentumScrollX.onMouseLeave}
                        onMouseMove={momentumScrollX.onMouseMove}
                        onWheel={momentumScrollX.onWheel}
                        $hasScroll={hasScroll}
                    >
                        {versionIds.map((versionId) => (
                            <VersionImage
                                key={`version-image-${versionId}`}
                                versionName={versionNamePerVersionId.get(versionId)!}
                                onClick={() => onChooseVersion(versionId)}
                            />
                        ))}
                    </S.VersionList>
                </S.VersionListWrapper>
            }
            {isToShowSettedVersion &&
                <S.SettedVersionWrapper>
                    <VersionImage
                        versionName={versionName.current!}
                        componentRef={refs.settedVersionImage}
                    />
                    <Button
                        onClick={onReturnToList}
                        children={<ArrowReturnIco />}
                        componentRef={refs.returnButton}
                    />
                </S.SettedVersionWrapper>
            }
        </S.Component>
    )
}
