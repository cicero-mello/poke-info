import { numbPxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const pokeWindow = {
    noWhiteLine: {
        maxHeight: 760
    },
    full: {
        maxWidth: 860,
        maxHeight: 624
    }
}

export const pokeWindowRem = {
    noWhiteLine: {
        maxHeight: numbPxToRem(pokeWindow.noWhiteLine.maxHeight)
    },
    full: {
        maxWidth: numbPxToRem(pokeWindow.full.maxWidth),
        maxHeight: numbPxToRem(pokeWindow.full.maxHeight)
    }
}

export const PokeWindow = styled.main.attrs({
    className: "poke-window"
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

    @media(max-height: ${pokeWindowRem.noWhiteLine.maxHeight}){
        background: ${styleGuide.color.onyxAlpha83};
        border-radius: 12px;
    }

    @media
        (max-width: ${pokeWindowRem.full.maxWidth}),
        (max-height: ${pokeWindowRem.full.maxHeight})
    {
        background: ${styleGuide.color.onyxAlpha83};
        border-radius: 12px;
        padding: 0px;
        border-radius: 0;
        width: 100%;
        aspect-ratio: unset;
    }
`
