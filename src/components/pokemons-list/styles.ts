import { VirtualItem } from "@tanstack/react-virtual"
import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"
import { VirtualStyleData } from "./types"

export const PX_VIRTUALIZED_SCROLL_PADDING_X = 48
export const PX_VIRTUALIZED_SCROLL_GAP_X = 36
export const PX_VIRTUALIZED_SCROLL_GAP_Y = 36

export const VirtualizedScroll = styled.div.attrs({
    className: "pokemons-list"
})<{ $hide?: boolean }>`
${({ $hide }) => css`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;

    padding-top: ${pxToRem(32)};

    transition: ${styleGuide.transitionTime.medium} linear;
    opacity: ${$hide ? 0 : 1};

    ${styleGuide.scrollbar.white}
    &::-webkit-scrollbar-track {
        margin-top: ${pxToRem(20)};
        margin-bottom: ${pxToRem(20)};
    }

    mask-image: linear-gradient(
        to bottom,
        transparent,
        black ${pxToRem(20)},
        black calc(100% - ${pxToRem(20)}),
        transparent
    );
    -webkit-mask-image: linear-gradient(
        to bottom,
        transparent,
        black ${pxToRem(20)},
        black calc(100% - ${pxToRem(20)}),
        transparent
    );
`}`

export const VirtualizedContainer = styled.div.attrs({
    className: "virtualized-container"
})<{ $totalHeight: number }>`
${({ $totalHeight }) => css`
    height: ${$totalHeight}px;
    width: calc(
        100% - (${PX_VIRTUALIZED_SCROLL_PADDING_X}px * 2)
    );
    position: relative;
`}`

export const VirtualizedItem = styled.div.attrs({
    className: "virtualized-item"
})<{ $virtualItem: VirtualItem, $virtualStyleData?: VirtualStyleData }>`
${({ $virtualItem, $virtualStyleData }) => css`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    transform: translateY(${$virtualItem.start}px);
    width: ${$virtualStyleData?.virtualItemWidth ?? "0px"};
    left: ${$virtualStyleData?.percentLeftForEachVirtualItemInARow[$virtualItem.lane]};
    z-index: 0;
`}`

export const NoFavoritePokemons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${pxToRem(4)};
    color: ${styleGuide.color.pearlGray};
    ${styleGuide.text.lg}

    p {
        display: flex;
        align-items: center;
        text-align: center;
    }

    .checkbox-pokeball {
        margin: 0 ${pxToRem(1)};
        height: ${pxToRem(22)};
        width: ${pxToRem(22)};

        > path {
            fill: ${styleGuide.color.pearlGray};
        }
    }

    @media (max-width: ${pxToRem(400)}){
        ${styleGuide.text.base}
    }
`
