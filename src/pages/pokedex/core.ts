import { WindowDimensions } from "@hooks"
import { getRootFontSize } from "@utils"
import * as S from "./styles"

export const getShowToogleFilterButton = (
    { height, width }: WindowDimensions
): boolean => {
    const rootFontSize = getRootFontSize()
    const { maxHeight, maxWidth } = S.window.full

    const maxHeightConsideringRem = maxHeight/16 * rootFontSize
    const maxWidthConsideringRem = maxWidth/16 * rootFontSize

    return (
        height <= maxHeightConsideringRem ||
        width <= maxWidthConsideringRem
    )
}
