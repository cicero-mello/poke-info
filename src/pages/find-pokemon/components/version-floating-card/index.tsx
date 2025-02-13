import { useEffect, useRef, useState } from "preact/hooks"
import { Button, FloatingCard, VersionImage } from "@components"
import { versionGroupIdPerVersionName } from "@utils"
import { VersionFloatingCardProps } from "./types"
import { FunctionComponent as FC } from "preact"
import { useAnimation } from "./animations"
import { ArrowReturnIco } from "@assets"
import { VersionName } from "@types"
import * as S from "./styles"

export const VersionFloatingCard: FC<VersionFloatingCardProps> = ({
    versionGroupId,
    setVersionGroupId,
    componentRef
}) => {
    const { refs, animations } = useAnimation()

    const versionName = useRef<VersionName>(null)
    const [isToShowSettedVersion, setIsToShowSettedVersion] = useState(
        !!versionGroupId && !!versionName.current
    )

    const onReturnToList = async () => {
        await animations.hideSettedVersion()
        setVersionGroupId(0)
        setIsToShowSettedVersion(false)
    }

    useEffect(() => {
        if(isToShowSettedVersion) {
            animations.showSettedVersion()
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
                        {[...versionGroupIdPerVersionName].map(([key, value]) => (
                            <>
                                <VersionImage
                                    key={key}
                                    versionName={key}
                                    onClick={async () => {
                                        versionName.current = key
                                        await animations.hideVersionList()
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
