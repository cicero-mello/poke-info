import { pxToRem, styleGuide } from "@style-guide"
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
        maxHeight: pxToRem(pokeWindow.noWhiteLine.maxHeight)
    },
    full: {
        maxWidth: pxToRem(pokeWindow.full.maxWidth),
        maxHeight: pxToRem(pokeWindow.full.maxHeight)
    }
}

export const PokeWindow = styled.main.attrs({
    className: "poke-window"
})`
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: ${pxToRem(40)};
    overflow: hidden;
    color: white;
    aspect-ratio: 1248 / 860;
    height: 100%;
    max-height: ${pxToRem(812)};
    align-self: center;
    padding-top: ${pxToRem(60)};

    background: ${styleGuide.color.onyxAlpha83};

    &::before{
        position: absolute;
        content: "";
        width: 100%;
        top: 0;
        height: ${pxToRem(60)};
        background-color: ${styleGuide.color.pearlGray};
        z-index: 5;
        pointer-events: none;
    }

    @media(max-height: ${pokeWindowRem.noWhiteLine.maxHeight}){
        background: ${styleGuide.color.onyxAlpha83};
        border-radius: ${pxToRem(12)};
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
        padding: 0px;
        border-radius: 0;
        width: 100%;
        height: 100%;
        aspect-ratio: unset;
        max-height: unset;

        &::before {
            content: unset;
        }
    }
`
