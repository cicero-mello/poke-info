import { pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "top-area"
})`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    width: 100%;
    height: ${pxToRem(154)};
    background-color: ${styleGuide.color.onyx};
    z-index: 3;
    align-items: center;
`

export const Center = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: unset;

    .pokemon-image {
        height: ${pxToRem(154)};
        width: ${pxToRem(154)};
        position: absolute;
        top: ${pxToRem(46)};
    }
`

export const PokemonName = styled.h1`
    ${styleGuide.text["2xl"]}
    height: fit-content;
    padding: ${pxToRem(10)} 0 ${pxToRem(4)} 0;
    white-space: nowrap;
    position: absolute;
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    left: ${pxToRem(12)};
    gap: ${pxToRem(8)};
    padding: ${pxToRem(38)} 0 0 ${pxToRem(4)};
`

export const PokeNumber = styled.span.attrs({
    className: "layout-poke-number"
})`
    ${styleGuide.text.base}
    color: ${styleGuide.color.pearlGray};
    font-weight: bold;
    white-space: nowrap;
    padding-bottom: ${pxToRem(2)};
`

export const SparklesContainer = styled.div`
    height: ${pxToRem(28)};
    .sparkles-ico {
        width: ${pxToRem(28)};
        height: ${pxToRem(28)};
    }
`

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    padding: ${pxToRem(40)} 0 ${pxToRem(24)} 0;

    .arrow-return-ico {
        height: ${pxToRem(24)};
    }

    .favorite-checkbox {
        input {
            border-radius: 50%;
            top: 0;
        }
    }

    .checkbox-pokeball {
        width: ${pxToRem(34)};
        height: ${pxToRem(34)};
    }
`
