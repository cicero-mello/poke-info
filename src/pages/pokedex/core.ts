import { WindowDimensions } from "@hooks"
import { getRootFontSize } from "@utils"
import { pokeWindow } from "@components"

export const getShowToggleFilterButton = (
    { height, width }: WindowDimensions
): boolean => {
    const rootFontSize = getRootFontSize()
    const { maxHeight, maxWidth } = pokeWindow.full

    const maxHeightConsideringRem = maxHeight/16 * rootFontSize
    const maxWidthConsideringRem = maxWidth/16 * rootFontSize

    return (
        height <= maxHeightConsideringRem ||
        width <= maxWidthConsideringRem
    )
}
