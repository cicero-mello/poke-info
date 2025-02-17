import { pokemonFloatingCardAnimationClasses } from "@pages/find-pokemon/desktop/components/pokemon-floating-card/animations"
import { transitionTime } from "@style-guide/transition-time"
import { numbPxToRem } from "@style-guide"
import { color } from "@style-guide/color"
import styled from "styled-components"

export const Component = styled.section`
    display: flex;
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: ${numbPxToRem(24)};

    .circle-pokemon-image {
        top: 0;
        position: absolute;
        opacity: 0;
        pointer-events: none;
        ${pokemonFloatingCardAnimationClasses}
    }

    .spinner {
        position: absolute;
        top: ${numbPxToRem(94)};
    }

    .styled-button {
        position: absolute;
        bottom: -${numbPxToRem(272)};

        opacity: 0;
        pointer-events: none;
        ${pokemonFloatingCardAnimationClasses}

        .arrow-return-ico {
            height: ${numbPxToRem(18)};
            * {
                transition: ${transitionTime.fast} linear;
                fill: ${color.whiteAlpha70};
            }
        }

        &:hover {
            .arrow-return-ico * {
                fill: ${color.whiteAlpha94};
            }
        }
    }
`

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${numbPxToRem(16)} ${numbPxToRem(24)};
    position: absolute;
    top: 0;

    .pokemon-search-input {
        button {
            height: ${numbPxToRem(32)};
        }
    }

    .pikachu-shadow-svg {
        height:  ${numbPxToRem(200)};
        width: fit-content;

        * {
            fill: ${color.platinum};
        }
    }

    ${pokemonFloatingCardAnimationClasses}
`
