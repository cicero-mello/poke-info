import { pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "pokemon-pixel-art"
})`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: ${pxToRem(140)};
    min-height: ${pxToRem(140)};
    width: ${pxToRem(140)};
    min-width: ${pxToRem(140)};
    cursor: pointer;
    user-select: none;

    background-color: ${styleGuide.color.blackAlpha05};
    border-radius: ${pxToRem(24)};
    box-shadow: inset 0 ${pxToRem(4)} ${pxToRem(4)} ${styleGuide.color.blackAlpha25};

    > a {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: ${pxToRem(24)};
    }

    img {
        filter: contrast(0.9);
        width: 96%;
        height: 96%;
        image-rendering: pixelated;
        pointer-events: none;

        transition-property: opacity, height, width;
        transition-timing-function: ease-in-out, linear, linear;
        transition-duration:
            ${styleGuide.transitionTime.slow},
            ${styleGuide.transitionTime.fast},
            ${styleGuide.transitionTime.fast}
        ;
    }

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: ${pxToRem(24)};
        box-shadow: 0 0px 0px ${styleGuide.color.blackAlpha25};
        transition: ${styleGuide.transitionTime.fast} linear;
        pointer-events: none;
    }

    transition-property: box-shadow, background-color;
    transition-timing-function: ease-in-out, ease-in-out;
    transition-duration:
        ${styleGuide.transitionTime.fast},
        ${styleGuide.transitionTime.fast}
    ;

    &:hover, &:has(*:focus-visible) {
        box-shadow: inset 0 0 0 ${styleGuide.color.blackAlpha25};
        background-color: ${styleGuide.color.whiteAlpha05};

        &::before {
            box-shadow: 0 ${pxToRem(4)} ${pxToRem(4)} ${styleGuide.color.blackAlpha25};
        }

        img {
            height: 100%;
            width: 100%;
        }
    }

    &:has(*:active) {
        background-color: ${styleGuide.color.blackAlpha05};
        box-shadow: inset 0 ${pxToRem(4)} ${pxToRem(4)} ${styleGuide.color.blackAlpha25};

        &::before {
            box-shadow: 0 0 0 ${styleGuide.color.blackAlpha25};
        }

        img {
            width: 96%;
            height: 96%;
        }
    }
`
