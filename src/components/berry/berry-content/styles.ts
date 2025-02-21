import { berryAnimationClasses } from "@pages/berry/animation"
import { scrollbar } from "@style-guide/scrollbar"
import styled, { css } from "styled-components"
import { color } from "@style-guide/color"
import { text } from  "@style-guide/text"
import { pxToRem } from "@style-guide"

export const Component = styled.div.attrs({
    className: "berry-content"
})`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 0 ${pxToRem(108)};

    ${berryAnimationClasses}

    .flavors-graph {
        margin-right: ${pxToRem(84)};
    }
`

export const DataList = styled.ul
<{$hasScrollX?: boolean}>`
${({$hasScrollX}) => css`
    list-style: none;
    gap: ${pxToRem(20)};
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-auto-flow: column;
    column-gap: ${pxToRem(60)};
    width: 100%;
    overflow-x: scroll;
    padding-bottom: ${pxToRem(24)};

    &:focus-visible{
        box-sizing: inherit;
        border-top: ${pxToRem(4)} solid ${color.outline};
        border-bottom: ${pxToRem(4)} solid ${color.outline};
    }

    ${$hasScrollX && css`
        user-select: none;
        cursor: grab;
        padding-right: ${pxToRem(24)};
        padding-left: ${pxToRem(24)};
        &:active {
            cursor: grabbing;
        }

        mask-image: linear-gradient(
            to right,
            transparent,
            black ${pxToRem(24)},
            black calc(100% - ${pxToRem(24)}),
            transparent
        );
        -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black ${pxToRem(24)},
            black calc(100% - ${pxToRem(24)}),
            transparent
        );
    `}

    ${scrollbar.whiteSmall}
    &::-webkit-scrollbar {
        height: ${pxToRem(2)};
    }
    &::-webkit-scrollbar-track {
        margin-right: ${pxToRem(24)};
        margin-left: ${pxToRem(24)};
    }

    .info-line {
        ${text.xl}
        flex-wrap: nowrap;
    }

    .info-line-title {
        font-weight: normal;
        color: ${color.platinum};
        white-space: nowrap;
    }

    .info-line-data {
        font-weight: bold;
        white-space: nowrap;
        color: ${color.softSilver};
    }
`}`
