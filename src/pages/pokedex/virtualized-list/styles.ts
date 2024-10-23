import { VirtualItem } from "@tanstack/react-virtual"
import styled, { css } from "styled-components"
import { VirtualStyleData } from "./core"

export const VirtualizedScroll = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;

    margin-top: 28px;
    padding-top: 32px;
`

export const VirtualizedContainer = styled.div
<{ $totalHeight: number }>`
${({ $totalHeight }) => css`

    height: ${$totalHeight}px;
    width: calc(100% - 96px); // padingx de 48px
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
    width: ${$virtualStyleData?.pxItemWidth ?? "0px"};
    transform: translateY(${$virtualRow.start}px);
    left: ${$virtualStyleData?.percentLeftForEachItemInARow[$virtualRow.lane]};
`}`
