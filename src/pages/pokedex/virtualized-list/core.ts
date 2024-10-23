export interface VirtualStyleData {
    pxItemWidth: string
    percentLeftForEachItemInARow: string[]
}

export interface VirtualStyleDataParams {
    pxScrollableElementWidth: number
    pxScrollableElementPaddingX: number
    pxCardWidth: number
    pxCardPaddingX: number
}

export const getVirtualStyleData = ({
    pxScrollableElementWidth,
    pxScrollableElementPaddingX,
    pxCardWidth,
    pxCardPaddingX
}: VirtualStyleDataParams): VirtualStyleData => {
    const cardTotalWidth = pxCardWidth + pxCardPaddingX

    const totalScrollWidth = (
        pxScrollableElementWidth - (pxScrollableElementPaddingX * 2)
    )

    const totalCardsByRow = Math.floor(
        totalScrollWidth / cardTotalWidth
    )

    const freeScrollSpace = (
        totalScrollWidth - (cardTotalWidth * totalCardsByRow)
    )

    const pxItemWidth = (
        (freeScrollSpace / totalCardsByRow)
        + cardTotalWidth
    ).toFixed(3) + "px"

    const percentLeftForEachItemInARow = Array.from(
        { length: totalCardsByRow },
        (_, i) => (
            ((100 / totalCardsByRow) * i).toFixed(3) + "%"
        )
    )

    return {
        pxItemWidth,
        percentLeftForEachItemInARow
    }
}
