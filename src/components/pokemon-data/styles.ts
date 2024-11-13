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
    z-index: 2;

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
    width: 100%;
    height: ${pxToRem("154px")};
    background-color: ${styleGuide.color.onyx};

    .pokemon-image {
        height: ${pxToRem("210px")};
        width: ${pxToRem("210px")};
        margin-top: 6px;
        z-index: 1;
    }

    .styled-anchor {
        position: absolute;
        right: ${pxToRem("16px")};
        top: ${pxToRem("10px")};

        opacity: 0.6;
        transition: ${styleGuide.transitionTime.fast};

        &:hover {
            opacity: 1;
        }
    }
`

export const PokeNumber = styled.span`
    ${styleGuide.text.lg}
    color: ${styleGuide.color.pearlGray};
    font-weight: 700;
    white-space: nowrap;
    min-width: ${pxToRem("105px")};
    padding: ${pxToRem("12px")} 0 0 ${pxToRem("16px")};
`

export const TagsAndFavorite = styled.div`
    display: flex;
    margin-left: ${pxToRem("28px")};
    flex-direction: column;
    justify-content: space-evenly;

    .checkbox-pokeball {
        width: ${pxToRem("44px")};
        height: ${pxToRem("44px")};
    }
`

export const TypeTags = styled.div`
    display: flex;
    gap: ${pxToRem("20px")};
`

export const DownAreaContainer = styled.div`
    display: flex;
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin-top: ${pxToRem("154px")};
    pointer-events: none;
`

export const DownArea = styled.div
<{ $pokemonType: PokeApi.PokemonType, $withEntryAnimation: boolean }>`
${({ $pokemonType, $withEntryAnimation }) => css`
    display: flex;
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

export const Content = styled.div`
    width: 500px;
    margin-top: 80px;
`
