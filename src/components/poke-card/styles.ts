import styled, { css, keyframes } from "styled-components"
import { pxToRem, styleGuide } from "@style-guide"
import { StyledCardProps } from "./types"

export enum POKE_CARD_STYLE_DATA {
    PX_SIMPLE_WIDTH = 160,
    PX_SIMPLE_HEIGHT = 256,
    PX_DETAILED_WIDTH = 210,
    PX_DETAILED_HEIGHT = 356
}

const borderLoading = keyframes`
    0% {
        border-color: ${styleGuide.color.normal};
    }
    50% {
        border-color: ${styleGuide.color.silverGray};
    }
    100% {
        border-color: ${styleGuide.color.normal};
    }
`

export const Card = styled.div<StyledCardProps>`
${({ $pokemonType, $cardMode = "Simple" }) => css`
    display: flex;
    position: relative;
    flex-direction: column;

    height: ${
        (POKE_CARD_STYLE_DATA.PX_SIMPLE_HEIGHT / 16).toFixed(5)
        + "rem"
    };
    width: ${
        (POKE_CARD_STYLE_DATA.PX_SIMPLE_WIDTH / 16).toFixed(5)
        + "rem"
    };

    border-radius: ${pxToRem("5px")};
    background-color: ${styleGuide.color.onyx};
    box-shadow:
        ${pxToRem("7px")}
        ${pxToRem("7px")}
        ${pxToRem("7px")}
        #00000033
    ;

    user-select: none;
    cursor: pointer;

    animation:
        ${styleGuide.keyframes.popUp}
        ${styleGuide.transitionTime.slow}
        ease-out
    ;

    transition-property: transform, width, height;
    transition-duration: ${styleGuide.transitionTime.medium};
    transition-timing-function: ease-in-out;

    .card-content {
        transition-property: border-color, background-color;
        transition-duration: ${styleGuide.transitionTime.medium};
        transition-timing-function: ease-in-out;

        ${!!$pokemonType && css`
            border-color: ${
                styleGuide.getCardColors($pokemonType).borderStrong
            };
        `}

        ${!$pokemonType && css`
            border-color: ${styleGuide.color.steelGray};
            animation:
                ${borderLoading}
                1.3s ease-in-out infinite
            ;
        `}

        &::before {
            transition-duration: ${styleGuide.transitionTime.medium};

            ${!!$pokemonType && css`
                border-color: ${
                    styleGuide.getCardColors($pokemonType).borderStrong
                };
            `}

            ${!$pokemonType && css`
                border-color: ${styleGuide.color.steelGray};
                animation:
                    ${borderLoading}
                    1.3s ease-in-out infinite
                ;
            `}
        }
    }

    .pokemon-image {
        display: flex;
        position: absolute;
        left: 25%;
        z-index: 1;
        pointer-events: none;
    }

    ${$pokemonType && css`
        &:hover, &:has(:focus) {
            transform: scale(1.1);

            .poke-name {
                color: white;
            }

            .card-content {
                background-color: ${
                    styleGuide.getCardColors($pokemonType).background
                };
                border-color: ${
                    styleGuide.getCardColors($pokemonType).border
                };
            }

            .card-content::before {
                border-color: ${
                    styleGuide.getCardColors($pokemonType).border
                };
            }
        }
    `}

    ${$cardMode === "Detailed" && css`
        height: ${
            (POKE_CARD_STYLE_DATA.PX_DETAILED_HEIGHT / 16).toFixed(5)
            + "rem"
        };
        width: ${
            (POKE_CARD_STYLE_DATA.PX_DETAILED_WIDTH / 16).toFixed(5)
            + "rem"
        };

        .card-content {
            padding-top: 23%;
        }

        .stats-container {
            margin-top: 2%;
        }

        .stat-bar {
            transition-property: color;
            transition-duration: ${styleGuide.transitionTime.medium};
            transition-timing-function: ease-in-out;
        }

        ${$pokemonType && css`
            &:hover .stat-bar{
                color: white;
            }
        `}
    `}

    ${!$pokemonType && css`
        pointer-events: none;
    `}

    .favorite-checkbox {
        position: absolute;
        right: 0;
        margin: ${pxToRem("5px")};
        height: ${pxToRem("24px")};
        width: ${pxToRem("24px")};
        transition: ${styleGuide.transitionTime.medium};
        z-index: 3;

        &:hover, &:has(:focus) {
            transform: scale(2.5) rotate(25deg);
        }
    }

    .styled-anchor {
        height: 100%;
        width: 100%;
    }
`}`

export const TopArea = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 30%;
    justify-content: space-between;
    padding: ${pxToRem("5px")};
`

export const PokeNumber = styled.span`
    ${styleGuide.text.xs}
    color: ${styleGuide.color.ashGray};

    transition:
        ${styleGuide.transitionTime.medium}
        ease-in-out
    ;

    &:empty {
        opacity: 0;
    }
`

export const CardContentContainer = styled.div`
    display: flex;
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    top: 22%;
    pointer-events: none;
`

export const CardContent = styled.div.attrs({
    className: "card-content"
})`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: 78%;
    padding-top: 21%;
    background-color: ${styleGuide.color.mistGray};
    border-radius: ${pxToRem("5px")};
    border-top:
        ${pxToRem("4px")} solid
        ${styleGuide.color.grassCardBorderStrong}
    ;

    &::before {
        content: '';
        position: absolute;
        transform: translateX(-50%);
        top: -10%;
        left: 50%;
        width: 53%;
        height: 24.5%;

        background: ${styleGuide.color.onyx};
        border-radius: 0px 0px 100px 100px;
        border:
            ${pxToRem("4px")} solid
            ${styleGuide.color.grassCardBorderStrong}
        ;
        border-top: none;
    }
`

export const PokeName = styled.span.attrs({
    className: "poke-name"
})`
    ${styleGuide.text.lg}
    color: ${styleGuide.color.steelGray};

    transition-property: color;
    transition-duration: ${styleGuide.transitionTime.slow};
    transition-timing-function: ease-out;

    &:empty {
        background-color: ${styleGuide.color.silverGray};
        color: transparent;
        width: 54%;
        height: ${pxToRem(`16px`)};
        margin: ${pxToRem(`6px`)} 0;
        border-radius: ${pxToRem("4px")};
        animation:
            ${styleGuide.keyframes.opacityLoading2}
            1.3s ease-in-out infinite
        ;
    }
`

export const StatsContainer = styled.div.attrs({
    className: "stats-container"
})`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    padding: 8px 16px;
    gap: ${pxToRem(`8px`)};
`
