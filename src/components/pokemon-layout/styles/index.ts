import { StyledComponentProps, StyledDownAreaProps } from "../types"
import { descendHeader, revealContent } from "./animations"
import { numbPxToRem, pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"
import { pokeWindowRem } from "@components"

export const Component = styled.div.attrs({
    className: "pokemon-data"
}) <StyledComponentProps>`
${({ $previewMode, $reverseAnimation, $removePointerEvents }) => css`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;

    ${$previewMode && !$reverseAnimation && css`
        animation:
            ${descendHeader}
            ${styleGuide.transitionTime.moreSlow}
            ease-out forwards
        ;
    `}

    ${$previewMode && $reverseAnimation && css`
        animation:
            ${descendHeader}
            ${styleGuide.transitionTime.moreSlow}
            ${styleGuide.transitionTime.medium}
            ease-in-out forwards reverse
        ;
    `}

    ${$removePointerEvents && css`
        pointer-events: none;
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
    z-index: 2;

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

export const SparklesContainer = styled.div`
    padding: ${numbPxToRem(12)} 0 0 ${numbPxToRem(16)};
    min-width: ${numbPxToRem(105)};
    .sparkles-ico {
        width: ${numbPxToRem(42)};
        height: ${numbPxToRem(42)};
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
    height: calc(100% - ${pxToRem("154px")} - ${pxToRem("60px")});
    margin-top: ${pxToRem("154px")};

    @media
        (max-height: ${pokeWindowRem.noWhiteLine.maxHeight}),
        (max-width: ${pokeWindowRem.full.maxWidth})
    {
        height: calc(100% - ${pxToRem("154px")});
    }

    @media
        (max-width: ${pokeWindowRem.full.maxWidth}),
        (max-height: ${pokeWindowRem.full.maxHeight})
    {
        height: calc(100% - ${pxToRem("154px")});
    }
`

export const DownArea = styled.div<StyledDownAreaProps>`
${({ $pokemonType, $previewMode, $reverseAnimation }) => css`
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
        z-index: 1;
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

    ${$previewMode && !$reverseAnimation && css`
        animation:
            ${revealContent}
            ${styleGuide.transitionTime.medium}
            ease forwards
        ;
    `}

    ${$previewMode && $reverseAnimation && css`
        animation:
            ${revealContent}
            ${styleGuide.transitionTime.moreSlow}
            ${styleGuide.transitionTime.medium}
            ease-in-out forwards reverse
        ;
    `}
`}`

export const Content = styled.div`
    display: flex;
    position: relative;
    width: 100%;

    animation:
        ${styleGuide.keyframes.fadeIn}
        ${styleGuide.transitionTime.medium}
        ease forwards
    ;
`
