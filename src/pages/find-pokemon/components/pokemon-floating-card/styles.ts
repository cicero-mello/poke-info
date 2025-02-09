import { pokemonFloatingCardAnimationClasses } from "./animations"
import { transitionTime } from "@style-guide/transition-time"
import { numbPxToRem } from "@style-guide"
import { color } from "@style-guide/color"
import styled from "styled-components"

export const ContentWrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 100%;

    .pokemon-search-input {
        max-width: ${numbPxToRem(256)};
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
        left: -${numbPxToRem(20)};
        height: fit-content;
        opacity: 0;
        transition: 200ms linear;

        ${pokemonFloatingCardAnimationClasses}

        .arrow-return-ico {
            height: ${numbPxToRem(18)};
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
    gap: ${numbPxToRem(12)};

    ${pokemonFloatingCardAnimationClasses}
`
