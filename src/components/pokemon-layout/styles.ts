import { StyledComponentProps, StyledContent, StyledDownAreaProps } from "./types"
import styled, { css, keyframes } from "styled-components"
import { pxToRem, styleGuide } from "@style-guide"
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
${({
    $previewMode,
    $reverseAnimation,
    $removePointerEvents,
    $prepareToChangePokemon,
    $isMobileMode
}) => css`
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

    .pokemon-image,
    .pokemon-name-and-stats,
    .type-tag,
    .checkbox-pokeball,
    .layout-poke-number,
    .sparkles-ico,
    .tab-viewer > div[role="tabpanel"] > div {
        transition: 300ms ease-in-out;
    }

    ${$prepareToChangePokemon && css`
        pointer-events: none;

        .pokemon-image,
        .pokemon-name-and-stats,
        .type-tag,
        .checkbox-pokeball,
        .layout-poke-number,
        .sparkles-ico,
        .tab-viewer > div[role="tabpanel"] > div {
            opacity: 0;
        }
    `}

    ${$isMobileMode && css`
        .tab-viewer {
            transition: 300ms ease-in-out;
            opacity: ${$prepareToChangePokemon ? "0" : "1"};
        }
    `}
`}`

export const DownAreaContainer = styled.div`
    display: flex;
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: calc(100% - ${pxToRem(154)} - ${pxToRem(60)});
    margin-top: ${pxToRem(154)};

    @media
        (max-height: ${pokeWindowRem.noWhiteLine.maxHeight}),
        (max-width: ${pokeWindowRem.full.maxWidth})
    {
        height: calc(100% - ${pxToRem(154)});
    }

    @media
        (max-width: ${pokeWindowRem.full.maxWidth}),
        (max-height: ${pokeWindowRem.full.maxHeight})
    {
        height: calc(100% - ${pxToRem(154)});
    }
`

export const DownArea = styled.div<StyledDownAreaProps>`
${({ $pokemonType, $previewMode, $reverseAnimation, $isMobileMode }) => css`
    display: flex;
    position: relative;
    width: 100%;
    background-color: ${styleGuide.getCardColors($pokemonType).background};
    border-radius: ${pxToRem(5)};
    border-top:
        ${pxToRem(5)} solid
        ${styleGuide.getCardColors($pokemonType).border}
    ;

    transition-property: background-color, border-color;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;

    &::before {
        content: "";
        z-index: 2;
        position: absolute;
        transform: translateX(-50%);
        left: ${pxToRem(210)};

        top: -${pxToRem(130)};
        width: ${pxToRem(268)};
        height: ${pxToRem(204)};

        background: ${styleGuide.color.onyx};
        border-radius: 0px 0px 300px 300px;
        border:
            ${pxToRem(5)} solid
            ${styleGuide.getCardColors($pokemonType).border}
        ;
        border-top: none;

        transition-property: border-color;
        transition-duration: 300ms;
        transition-timing-function: ease-in-out;

        ${$isMobileMode && css`
            left: 50%;
            top: -${pxToRem(134)};
            width: ${pxToRem(194)};
            height: ${pxToRem(188)};
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
            height: ${pxToRem(70)};
            z-index: 1;
            background: linear-gradient(
                ${styleGuide.getCardColors($pokemonType).background}  ${pxToRem(8)},
                transparent
            );
        }
    `}
`}`
