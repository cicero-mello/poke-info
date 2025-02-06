import { useQuery, useQueryClient } from "@tanstack/react-query"
import { BerryComponents, Button, Spinner } from "@components"
import { getRootFontSize, updateUrl } from "@utils"
import { useAnimation } from "./animation"
import { ArrowReturnIco } from "@assets"
import { useWindowResize } from "@hooks"
import { useState } from "preact/hooks"
import { useRoute } from "preact-iso"
import { PATHS } from "@types"
import * as S from "./styles"
import * as api from "@api"

export const Berry = () => {
    const { refs, animations } = useAnimation()

    const { params } = useRoute()
    const urlSearchParams = new URLSearchParams(window.location.search)
    const urlItemId = urlSearchParams.get("item")

    const [berryId, setBerryId] = useState(+params.id)
    const [itemId, setItemId] = useState(urlItemId ? +urlItemId : 0)
    const [showLoader, setShowLoader] = useState(false)

    const queryClient = useQueryClient()
    const { data } = useQuery({
        queryKey: ["getBerry", berryId],
        queryFn: () => api.getBerry({ idOrName: berryId })
    })

    const changeBerry = async (
        newBerryId: number,
        animationDirection: "left" | "right" | "bottom"
    ) => {
        const showLoaderTimeout = setTimeout(() => setShowLoader(true), 500)
        const berryQuery = queryClient.fetchQuery({
            queryKey: ["getBerry", newBerryId],
            queryFn: () => api.getBerry({ idOrName: newBerryId })
        })

        const animationsMap = {
            left: { exit: animations.goRight, enter: animations.comeFromLeft },
            right: { exit: animations.goLeft, enter: animations.comeFromRight },
            bottom: { exit: animations.goBottom, enter: animations.comeFromBottom }
        }
        const animate = animationsMap[animationDirection]

        await animate.exit({ keepTitle: false })
        await berryQuery

        updateUrl(PATHS.BERRIES + "/" + newBerryId)
        setBerryId(newBerryId)
        setItemId(0)

        animate.enter({ keepTitle: false })
        clearTimeout(showLoaderTimeout)
        setShowLoader(false)
    }

    const seeItemData = async () => {
        if (!data?.itemId) return
        const showLoaderTimeout = setTimeout(() => setShowLoader(true), 500)

        const itemQuery = queryClient.fetchQuery({
            queryKey: ["getItem", data.itemId],
            queryFn: () => api.getItem({ idOrName: data.itemId })
        })

        animations.hideTitleAnchor()
        await animations.goBottom({ keepTitle: true })
        await itemQuery

        updateUrl(`${PATHS.BERRIES}/${berryId}?item=${data.itemId}`)
        setItemId(data.itemId ?? 0)

        animations.comeFromBottom({ keepTitle: true })
        animations.showTitleAnchor()
        clearTimeout(showLoaderTimeout)
        setShowLoader(false)
    }

    const returnToBerryContent = async () => {
        animations.hideTitleAnchor()
        await animations.goBottom({ keepTitle: true })

        updateUrl(`${PATHS.BERRIES}/${berryId}`)
        setItemId(0)

        animations.comeFromBottom({ keepTitle: true })
        animations.showTitleAnchor()
    }

    const windowDimensions = useWindowResize()
    const rootFontSize = getRootFontSize()
    const pentagonSize = (
        windowDimensions.width > (500 / 16 * rootFontSize) ? 140 : 120
    )
    const pentagonAlwaysShowStatsValue = (
        windowDimensions.width <= (860 / 16 * rootFontSize)
    )

    return (
        <S.Screen>
            <S.BerryWindow>
                <BerryComponents.Header/>
                <S.BerryData $showLoading={showLoader || !data}>
                    <Spinner />
                    {!!data && <>
                        <S.TitleWrapper ref={refs.titleWrapperRef} className={"come-from-bottom"}>
                            <h2> {data?.name} </h2>
                            {!itemId &&
                                <Button
                                    children="Read More"
                                    theme="smallTag"
                                    preventNavOnClick
                                    navigate={{ path: `${PATHS.BERRIES}/${berryId}?item=${data.itemId}` }}
                                    onClick={seeItemData}
                                />
                            }
                            {!!itemId &&
                                <Button
                                    children={<ArrowReturnIco />}
                                    preventNavOnClick
                                    navigate={{ path: `${PATHS.BERRIES}/${berryId}` }}
                                    onClick={returnToBerryContent}
                                />
                            }
                        </S.TitleWrapper>
                        {!itemId &&
                            <BerryComponents.BerryContent
                                naturalGiftType={data.naturalGiftType}
                                smoothness={data.smoothness}
                                firmness={data.firmness}
                                size={data.size}
                                naturalGiftPower={data.naturalGiftPower}
                                soilDryness={data.soilDryness}
                                grownTime={data.grownTime}
                                maxHarvest={data.maxHarvest}
                                flavors={data.flavors}
                                pentagonSize={pentagonSize}
                                componentRef={refs.berryContentRef}
                                pentagonAlwaysShowStatsValue={pentagonAlwaysShowStatsValue}
                            />
                        }
                        {!!itemId &&
                            <BerryComponents.ItemContent
                                itemId={itemId}
                                componentRef={refs.itemContentRef}
                            />
                        }
                    </>}
                </S.BerryData>
                <BerryComponents.Footer
                    berryId={berryId}
                    changeBerry={changeBerry}
                />
            </S.BerryWindow>
        </S.Screen>
    )
}
