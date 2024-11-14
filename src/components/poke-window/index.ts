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
    position: relative;
    border-radius: 40px;
    overflow: hidden;
    color: white;
    aspect-ratio: 1248 / 860;
    height: 100%;
    padding-top: 60px;

    background: ${styleGuide.color.onyxAlpha83};

    &::before{
        position: absolute;
        content: "";
        width: 100%;
        top: 0;
        height: 60px;
        background-color: ${styleGuide.color.pearlGray};
        z-index: 3;
        pointer-events: none;
    }

    @media(max-height: ${pokeWindowRem.noWhiteLine.maxHeight}){
        background: ${styleGuide.color.onyxAlpha83};
        border-radius: 12px;
        padding-top: 0;

        &::before {
            content: unset;
        }
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
        height: 100%;
        aspect-ratio: unset;

        &::before {
            content: unset;
        }
    }
`