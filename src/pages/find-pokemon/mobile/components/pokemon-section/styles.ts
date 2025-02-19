import { animationClasses } from "./animations/animation-classes"
import { transitionTime } from "@style-guide/transition-time"
import { color } from "@style-guide/color"
import { pxToRem } from "@style-guide"
import styled from "styled-components"

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
        top: ${pxToRem(94)};
    }

    .styled-button {
        margin-top: ${pxToRem(10)};
        opacity: 0;
        pointer-events: none;

        .arrow-return-ico {
            height: ${pxToRem(18)};
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
    gap: ${pxToRem(16)} ${pxToRem(24)};
    position: absolute;
    top: 0;

    .pokemon-search-input {
        button {
            height: ${pxToRem(32)};
        }
    }

    .pikachu-shadow-svg {
        height:  ${pxToRem(200)};
        width: fit-content;

        * {
            fill: ${color.platinum};
        }
    }
`
