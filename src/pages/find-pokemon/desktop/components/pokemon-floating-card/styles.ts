import { pokemonFloatingCardAnimationClasses } from "./animations"
import { transitionTime } from "@style-guide/transition-time"
import { color } from "@style-guide/color"
import { pxToRem } from "@style-guide"
import styled from "styled-components"

export const ContentWrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 100%;

    .pokemon-search-input {
        max-width: ${pxToRem(256)};
        width: 100%;
    }

    .pikachu-shadow-svg {
        * {
            fill: ${color.whiteAlpha05};
        }
    }

    .circle-pokemon-image {
        position: absolute;
        opacity: 0;
        transform: scale(0);
        ${pokemonFloatingCardAnimationClasses}
    }

    .styled-button {
        position: absolute;
        top: 0;
        left: -${pxToRem(20)};
        height: fit-content;
        opacity: 0;
        margin-left: ${pxToRem(18)};
        z-index: 1;

        ${pokemonFloatingCardAnimationClasses}

        .arrow-return-ico {
            height: ${pxToRem(18)};
            width: fit-content;

            * {
                transition: ${transitionTime.fast} linear;
                fill: ${color.whiteAlpha49};
            }
        }

        &:hover{
            .arrow-return-ico *{
                fill: ${color.whiteAlpha70};
            }
        }
    }
`

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    gap: ${pxToRem(12)};

    ${pokemonFloatingCardAnimationClasses}
`
