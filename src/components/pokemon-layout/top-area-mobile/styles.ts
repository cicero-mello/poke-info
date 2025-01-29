import { numbPxToRem, pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "top-area"
})`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    width: 100%;
    height: ${pxToRem("154px")};
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
        height: ${numbPxToRem(154)};
        width: ${numbPxToRem(154)};
        position: absolute;
        top: ${numbPxToRem(46)};
    }
`

export const PokemonName = styled.h1`
    ${styleGuide.text["2xl"]}
    height: fit-content;
    padding: ${numbPxToRem(10)} 0 ${numbPxToRem(4)} 0;
    white-space: nowrap;
    position: absolute;
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    left: ${numbPxToRem(12)};
    gap: ${numbPxToRem(8)};
    padding: ${numbPxToRem(38)} 0 0 ${numbPxToRem(4)};
`

export const PokeNumber = styled.span`
    ${styleGuide.text.base}
    color: ${styleGuide.color.pearlGray};
    font-weight: bold;
    white-space: nowrap;
    padding-bottom: ${numbPxToRem(2)};
`

export const SparklesContainer = styled.div`
    height: ${numbPxToRem(28)};
    .sparkles-ico {
        width: ${numbPxToRem(28)};
        height: ${numbPxToRem(28)};
    }
`

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    padding: ${numbPxToRem(40)} 0 ${numbPxToRem(24)} 0;

    .arrow-return-ico {
        height: ${numbPxToRem(24)};
    }

    .checkbox-pokeball {
        width: ${numbPxToRem(34)};
        height: ${numbPxToRem(34)};
    }
`
