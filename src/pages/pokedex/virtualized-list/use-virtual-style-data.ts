import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "preact/hooks"
import { useVirtualStyleDataParams, VirtualStyleData } from "./types"
import { POKE_CARD_STYLE_DATA, PokeCardMode } from "@components"
import { getVirtualStyleData } from "./core"
import { debounce } from "@utils"
import * as S from "./styles"

export const useVirtualStyleData = ({
    virtualizedScrollRef, cardMode
}: useVirtualStyleDataParams): VirtualStyleData | undefined => {
    const cardModeRef = useRef<PokeCardMode>(cardMode)
    const [
        virtualStyleData,
        setVirtualStyleData
    ] = useState<VirtualStyleData>()

    const setNewVirtualStyleData = useCallback(() => {
        const pxCardWidth = (
            cardModeRef.current === "Detailed" ?
                POKE_CARD_STYLE_DATA.PX_DETAILED_WIDTH :
                POKE_CARD_STYLE_DATA.PX_SIMPLE_WIDTH
        )

        const pxCardHeight = (
            cardModeRef.current === "Detailed" ?
                POKE_CARD_STYLE_DATA.PX_DETAILED_HEIGHT :
                POKE_CARD_STYLE_DATA.PX_SIMPLE_HEIGHT
        )

        const newVirtualStyleData = getVirtualStyleData({
            virtualizedScroll: {
                pxWidth: virtualizedScrollRef.current?.offsetWidth ?? 0,
                pxGapX: S.PX_VIRTUALIZED_SCROLL_GAP_X,
                pxGapY: S.PX_VIRTUALIZED_SCROLL_GAP_Y,
                pxPaddingX: S.PX_VIRTUALIZED_SCROLL_PADDING_X
            },
            item: {
                pxWidth: pxCardWidth,
                pxHeight: pxCardHeight
            }
        })

        setVirtualStyleData(newVirtualStyleData)
    }, [])

    useLayoutEffect(() => {
        cardModeRef.current = cardMode
    }, [cardMode])

    useEffect(() => {
        setNewVirtualStyleData()
    }, [cardMode])

    useEffect(() => {
        const onResizeDebounced = debounce(
            setNewVirtualStyleData, 300
        )
        window.addEventListener("resize", onResizeDebounced)
        return () => {
            window.removeEventListener("resize", onResizeDebounced)
        }
    }, [])

    return virtualStyleData
}
