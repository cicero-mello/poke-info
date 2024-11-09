import styled, { css, keyframes } from "styled-components"
import { pxToRem, styleGuide } from "@style-guide"
import { PokeApi } from "@types"

const descendHeader = keyframes`
    from {
        height: calc(100% + 16rem);
        transform: translateY(-16rem);
    }
    to {
        height: 100%;
        transform: translateY(0);
    }
`

const descendContent = keyframes`
    from {
        background-color: transparent;
    }
`

export const Component = styled.div.attrs({
    className: "pokemon-data"
})<{ $withEntryAnimation: boolean }>`
${({ $withEntryAnimation }) => css`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    position: absolute;

    ${$withEntryAnimation && css`
        animation:
            ${descendHeader}
            ${styleGuide.transitionTime.moreSlow}
            ease-out forwards
        ;
    `}
`}`

export const TopArea = styled.div.attrs({
    className: "top-area"
})`
    display: flex;
    position: relative;
    height: ${pxToRem("154px")};
    width: 100%;
    background-color: ${styleGuide.color.onyx};

    .pokemon-image {
        position: absolute;
        height: ${pxToRem("210px")};
        left: ${pxToRem("105px")};
        top: 6px;
        z-index: 10;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin-top: ${pxToRem("154px")};
    pointer-events: none;
`

export const Content = styled.div.attrs({
    className: "content"
})<{ $pokemonType: PokeApi.PokemonType, $withEntryAnimation: boolean }>`
${({ $pokemonType, $withEntryAnimation }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    background-color: ${styleGuide.getCardColors($pokemonType).background};
    border-radius: ${pxToRem("5px")};
    border-top:
        ${pxToRem("5px")} solid
        ${styleGuide.getCardColors($pokemonType).border}
    ;

    &::before {
        content: "";
        position: absolute;
        transform: translateX(-50%);
        left: ${pxToRem("210px")};

        top: -${pxToRem("130px")};
        width: ${pxToRem("268px")};
        height: ${pxToRem("204px")};

        background: ${styleGuide.color.onyx};
        border-radius: 0px 0px 300px 300px;
        border:
            ${pxToRem("5px")} solid
            ${styleGuide.getCardColors($pokemonType).border}
        ;
        border-top: none;
    }

    ${$withEntryAnimation && css`
        animation:
            ${descendContent}
            ${styleGuide.transitionTime.medium}
            ease forwards
        ;
    `}
`}`

export const TypeTagContainer = styled.div`
    display: flex;
    gap: ${pxToRem("20px")};
    margin: 20px;
`
