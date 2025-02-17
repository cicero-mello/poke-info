import { transitionTime } from "@style-guide/transition-time"
import { numbPxToRem } from "@style-guide"
import { color } from "@style-guide/color"
import styled from "styled-components"
import { animationClasses } from "./animations/animation-classes"

export const Component = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;

    .circle-pokemon-image {
        opacity: 0;
        pointer-events: none;
    }

    .spinner {
        position: absolute;
        top: ${numbPxToRem(94)};
    }

    .styled-button {
        margin-top: ${numbPxToRem(10)};
        opacity: 0;
        pointer-events: none;

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

    .circle-pokemon-image, & > .styled-button, .search-wrapper {
        ${animationClasses}
    }
`

export const SearchWrapper = styled.div.attrs({
    className: "search-wrapper"
})`
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
`
