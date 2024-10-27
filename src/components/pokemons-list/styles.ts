import { VirtualItem } from "@tanstack/react-virtual"
import styled, { css } from "styled-components"
import { VirtualStyleData } from "./types"
import { styleGuide } from "@style-guide"

export const PX_VIRTUALIZED_SCROLL_PADDING_X = 48
export const PX_VIRTUALIZED_SCROLL_GAP_X = 36
export const PX_VIRTUALIZED_SCROLL_GAP_Y = 36

export const VirtualizedScroll = styled.div
<{ $hide?: boolean }>`
${({ $hide }) => css`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;

    margin-top: 28px;
    padding-top: 32px;

    transition: ${styleGuide.transitionTime.mediumSlow} linear;
    opacity: ${$hide ? 0 : 1};
`}`

export const VirtualizedContainer = styled.div
<{ $totalHeight: number }>`
${({ $totalHeight }) => css`
    height: ${$totalHeight}px;
    width: calc(
        100% - (${PX_VIRTUALIZED_SCROLL_PADDING_X}px * 2)
    );
    position: relative;
`}`

export const VirtualizedItem = styled.div.attrs({
    className: "virtualized-item"
})<{ $virtualRow: VirtualItem, $virtualStyleData?: VirtualStyleData }>`
${({ $virtualRow, $virtualStyleData }) => css`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    transform: translateY(${$virtualRow.start}px);
    width: ${$virtualStyleData?.virtualItemWidth ?? "0px"};
    left: ${$virtualStyleData?.percentLeftForEachVirtualItemInARow[$virtualRow.lane]};
`}`
