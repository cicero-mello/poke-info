import { numbPxToRem, pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"

export const window = {
    noWhiteLine: {
        maxHeight: 760
    },
    full: {
        maxWidth: 860,
        maxHeight: 624
    }
}

const windowRem = {
    noWhiteLine: {
        maxHeight: numbPxToRem(window.noWhiteLine.maxHeight)
    },
    full: {
        maxWidth: numbPxToRem(window.full.maxWidth),
        maxHeight: numbPxToRem(window.full.maxHeight)
    }
}

export const Screen = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    padding: 48px;

    max-height: calc(100svh - ${styleGuide.dimensions.headerHeight});
    height: 100%;
    width: 100%;

    @media(max-height: ${windowRem.noWhiteLine.maxHeight}){
        padding: 12px 48px;

        > .window {
            background: ${styleGuide.color.onyxAlpha83};
            border-radius: 12px;
        }
    }

    @media
        (max-width: ${windowRem.full.maxWidth}),
        (max-height: ${windowRem.full.maxHeight})
    {
        padding: 0;

        > .window {
            background: ${styleGuide.color.onyxAlpha83};
            border-radius: 12px;
            padding: 0px;
            border-radius: 0;
            width: 100%;
            aspect-ratio: unset;
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
    height: 100%;

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
    position: relative;
    justify-content: space-between;

    width: 100%;
    margin-top: 98px;
    margin-bottom: ${pxToRem("28px")};
    padding: 0 clamp(36px, 6%, 100%);
    overflow: hidden;

    opacity: 1;
    min-height: ${pxToRem("68px")};
    height: ${pxToRem("68px")};

    @media(max-height: ${windowRem.noWhiteLine.maxHeight}){
        margin-top: ${pxToRem("28px")};
    }

    @media
        (max-width: ${windowRem.full.maxWidth}),
        (max-height: ${windowRem.full.maxHeight})
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        min-height: ${pxToRem("150px")};
        height: ${pxToRem("150px")};

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
            opacity: 0;
            min-height: 0;
            height: 0;
            margin-bottom: 0;
            filter: blur(15px);
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

export const ToogleFilterButton = styled.button
<{ $hide: boolean }>`
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
