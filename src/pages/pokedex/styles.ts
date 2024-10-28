import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"

export const Screen = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    padding: 48px;

    max-height: calc(100svh - ${styleGuide.dimensions.headerHeight});
    height: 100%;
    width: 100%;

    @media(max-height: ${pxToRem("760px")}){
        padding: 12px 48px;

        > .window {
            background: ${styleGuide.color.onyxAlpha83};
            border-radius: 12px;
        }

        > .window > .filters {
            padding: ${pxToRem("28px")} 6% 0 6%;
        }
    }

    @media (max-width: ${pxToRem("860px")}), (max-height: ${pxToRem("624px")}){
        padding: 0;

        > .window {
            background: ${styleGuide.color.onyxAlpha83};
            border-radius: 12px;
            padding: 0px;
            border-radius: 0;
            width: 100%;
            aspect-ratio: unset;
        }

        > .window > .filters {
            padding: ${pxToRem("28px")} 6% 0 6%;
            gap: 24px;
        }

        > .window > .filters > .pokemon-search-input {
            width: 100%;
            span {
                max-width: unset;
            }
        }

        > .window > .filters > .right-filters {
            width: 100%;
            justify-content: space-evenly;
        }
    }
`

export const Window = styled.main.attrs({
    className: "window"
})`
    display: flex;
    flex-direction: column;
    border-radius: 40px;
    overflow: hidden;
    color: white;
    aspect-ratio: 1248 / 860;

    background: linear-gradient(
        to bottom,
        ${styleGuide.color.pearlGray} 60px,
        ${styleGuide.color.onyxAlpha83} 60px
    );
`

export const Filters = styled.div.attrs({
    className: "filters"
})<{ $hide: boolean }>`
${({ $hide }) => css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    padding: 98px 6% 0 6%;
    margin-bottom: 28px;

    transition: 300ms;
    height: 174px; //TODO
    opacity: 1;

    ${$hide && css`
        opacity: 0;
        height: 0px;
    `}
`}`

export const RightFilters = styled.span.attrs({
    className: "right-filters"
})`
    display: flex;
    flex-wrap: wrap;
    gap: 38px;
`
