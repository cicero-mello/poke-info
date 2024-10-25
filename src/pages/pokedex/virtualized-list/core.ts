import { VirtualStyleData, GetVirtualStyleDataParams } from "./types"

export const getVirtualStyleData = ({
    virtualizedScroll, item
}: GetVirtualStyleDataParams): VirtualStyleData => {
    const itemTotalWidth = item.pxWidth + virtualizedScroll.pxGapX

    const totalScrollWidth = (
        virtualizedScroll.pxWidth - (virtualizedScroll.pxPaddingX * 2)
    )

    const totalItemsByRow = Math.floor(
        totalScrollWidth / itemTotalWidth
    )

    const freeScrollSpace = (
        totalScrollWidth - (itemTotalWidth * totalItemsByRow)
    )

    const virtualItemWidth = (
        (freeScrollSpace / totalItemsByRow)
        + itemTotalWidth
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

    const lanes = percentLeftForEachVirtualItemInARow.length
    const overscan = lanes * 2

    return {
        virtualItemWidth,
        pxVirtualItemHeight,
        percentLeftForEachVirtualItemInARow,
        lanes,
        overscan
    }
}
