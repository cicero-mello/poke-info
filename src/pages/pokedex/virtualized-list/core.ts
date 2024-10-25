import { VirtualStyleData, GetVirtualStyleDataParams } from "./types"

export const getVirtualStyleData = ({
    virtualizedScroll, item
}: GetVirtualStyleDataParams): VirtualStyleData => {
    const cardTotalWidth = item.pxWidth + virtualizedScroll.pxGapX

    const totalScrollWidth = (
        virtualizedScroll.pxWidth - (virtualizedScroll.pxPaddingX * 2)
    )

    const totalItemsByRow = Math.floor(
        totalScrollWidth / cardTotalWidth
    )

    const freeScrollSpace = (
        totalScrollWidth - (cardTotalWidth * totalItemsByRow)
    )

    const virtualItemWidth = (
        (freeScrollSpace / totalItemsByRow)
        + cardTotalWidth
    ).toFixed(3) + "px"

    const percentLeftForEachVirtualItemInARow = Array.from(
        { length: totalItemsByRow },
        (_, i) => (
            ((100 / totalItemsByRow) * i).toFixed(3) + "%"
        )
    )

    const pxVirtualItemHeight = (
        item.pxHeight + virtualizedScroll.pxGapY
    )

    return {
        virtualItemWidth,
        pxVirtualItemHeight,
        percentLeftForEachVirtualItemInARow
    }
}
