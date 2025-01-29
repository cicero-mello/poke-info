import { StyledComponentProps, StyledContent, StyledDownAreaProps } from "./types"
import { numbPxToRem, pxToRem, styleGuide } from "@style-guide"
import styled, { css, keyframes } from "styled-components"
import { pokeWindowRem } from "@components"

export const descendHeader = keyframes`
    from {
        height: calc(100% + 16rem);
        transform: translateY(-16rem);
    }
    to {
        height: 100%;
        transform: translateY(0);
    }
`

export const revealContent = keyframes`
    from {
        background-color: transparent;
    }
`

export const Component = styled.div.attrs({
    className: "pokemon-data"
}) <StyledComponentProps>`
${({ $previewMode, $reverseAnimation, $removePointerEvents }) => css`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;

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
${({ $pokemonType, $previewMode, $reverseAnimation, $isMobileMode }) => css`
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
        z-index: 2;
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

        ${$isMobileMode && css`
            left: 50%;
            top: -${numbPxToRem(134)};
            width: ${numbPxToRem(194)};
            height: ${numbPxToRem(188)};
        `}
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

export const Content = styled.div<StyledContent>`
${({ $isMobileMode, $pokemonType }) => css`
    display: flex;
    position: relative;
    width: 100%;

    animation:
        ${styleGuide.keyframes.fadeIn}
        ${styleGuide.transitionTime.medium}
        ease forwards
    ;

    ${$isMobileMode && css`
        flex-direction: column;
        overflow-y: scroll;
        ${styleGuide.scrollbar.hidden}

        &::before {
            content: "";
            pointer-events: none;
            position: fixed;
            width: calc(100%);
            height: ${numbPxToRem(70)};
            z-index: 1;
            background: linear-gradient(
                ${styleGuide.getCardColors($pokemonType).background}  ${numbPxToRem(8)},
                transparent
            );
        }
    `}
`}`
