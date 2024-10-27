import { pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Screen = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    padding: 48px;

    max-height: calc(100svh - ${styleGuide.dimensions.headerHeight});
    height: 100%;
    width: 100%;
`

export const Window = styled.main`
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

export const Filters = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 98px 6% 0 6%;
`

export const RightFilters = styled.span`
    display: flex;
    gap: 38px;
`

export const PokeCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    gap: ${pxToRem("36px")} ${pxToRem("44px")};
    padding: ${pxToRem("16px")} ${pxToRem("48px")};

    margin-top: 28px;
    padding-top: 32px;
    overflow-y: scroll;
    overflow-x: hidden;
`
