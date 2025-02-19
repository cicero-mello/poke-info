import { berryAnimationClasses } from "@pages/berry/animation"
import { scrollbar } from "@style-guide/scrollbar"
import { numbPxToRem } from "@style-guide"
import { color } from "@style-guide/color"
import { text } from  "@style-guide/text"
import styled, { css } from "styled-components"

export const Component = styled.div.attrs({
    className: "berry-content"
})`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 0 ${numbPxToRem(108)};

    ${berryAnimationClasses}

    .flavors-graph {
        margin-right: ${numbPxToRem(84)};
    }
`

export const DataList = styled.ul
<{$hasScrollX?: boolean}>`
${({$hasScrollX}) => css`
    list-style: none;
    gap: ${numbPxToRem(20)};
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-auto-flow: column;
    column-gap: ${numbPxToRem(60)};
    width: 100%;
    overflow-x: scroll;
    padding-bottom: ${numbPxToRem(24)};

    ${$hasScrollX && css`
        user-select: none;
        cursor: grab;
        &:active {
            cursor: grabbing;
        }

        mask-image: linear-gradient(
            to right,
            transparent,
            black ${numbPxToRem(24)},
            black calc(100% - ${numbPxToRem(24)}),
            transparent
        );
        -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black ${numbPxToRem(24)},
            black calc(100% - ${numbPxToRem(24)}),
            transparent
        );
    `}

    ${scrollbar.whiteSmall}
    &::-webkit-scrollbar {
        height: ${numbPxToRem(2)};
    }
    &::-webkit-scrollbar-track {
        margin-right: ${numbPxToRem(24)};
        margin-left: ${numbPxToRem(24)};
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
