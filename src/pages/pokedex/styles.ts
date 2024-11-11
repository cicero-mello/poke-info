import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"
import { pokeWindowRem } from "@components"

export const Screen = styled.div<{ $chosePokemon: number }>`
${({ $chosePokemon }) => css`
    display: flex;
    align-self: center;
    justify-content: center;
    padding: 48px;

    max-height: calc(100svh - ${styleGuide.dimensions.headerHeight});
    height: 100%;
    width: 100%;

    ${!!$chosePokemon && css`
        pointer-events: none;
        .filters, .pokemons-list, .toggle-filter-button {
            transition: 400ms;
            opacity: 0.5;
        }
    `}

    @media(max-height: ${pokeWindowRem.noWhiteLine.maxHeight}){
        padding: 12px 48px;
    }

    @media
        (max-width: ${pokeWindowRem.full.maxWidth}),
        (max-height: ${pokeWindowRem.full.maxHeight})
    {
        padding: 0;
    }
`}`

export const Filters = styled.div.attrs({
    className: "filters"
})<{ $hide: boolean }>`
${({ $hide }) => css`
    display: flex;
    position: relative;
    justify-content: space-between;

    animation:
        ${styleGuide.keyframes.fadeIn}
        ${styleGuide.transitionTime.medium}
        linear forwards
    ;

    width: 100%;
    margin-top: 38px;
    margin-bottom: ${pxToRem("28px")};
    padding: 0 clamp(36px, 6%, 100%);

    opacity: 1;
    min-height: ${pxToRem("68px")};
    height: ${pxToRem("68px")};

    @media(max-height: ${pokeWindowRem.noWhiteLine.maxHeight}){
        margin-top: ${pxToRem("28px")};
    }

    @media
        (max-width: ${pokeWindowRem.full.maxWidth}),
        (max-height: ${pokeWindowRem.full.maxHeight})
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        min-height: ${pxToRem("150px")};
        height: ${pxToRem("150px")};
        overflow: hidden;

        margin-top: ${pxToRem("32px")};
        gap: ${pxToRem("24px")};

        .pokemon-search-input {
            width: 100%;
            max-width: ${pxToRem("550px")};
            span {
                max-width: unset;
            }
        }

        .right-filters {
            width: 100%;
            flex-wrap: wrap;
            justify-content: space-evenly;
            gap: ${pxToRem("24px")};
        }

        transition: 300ms ease-out;

        ${$hide && css`
            min-height: 0;
            height: 0;
            margin-bottom: 0;
            margin-top: ${pxToRem("34px")};
        `}
    }

    @media(max-width: ${pxToRem("370px")}){
        min-height: ${pxToRem("260px")};

        ${$hide && css`
            min-height: 0;
        `}
    }
`}`

export const RightFilters = styled.span.attrs({
    className: "right-filters"
})`
    display: flex;
    gap: 38px;
`

export const ToggleFilterButton = styled.button.attrs({
    className: "toggle-filter-button"
})<{ $hide: boolean }>`
${({ $hide }) => css`

    position: relative;
    width: 100%;
    height: ${pxToRem("20px")};
    margin-bottom: ${pxToRem(`42px`)};
    color: ${styleGuide.color.ashGray};
    -webkit-tap-highlight-color: transparent;

    &::before {
        content: "${$hide ? "Show Filters" : "Hide Filters"}";
        position: absolute;
        right: 36px;

        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
    }
`}`
