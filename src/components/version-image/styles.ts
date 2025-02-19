import { transitionTime } from "@style-guide/transition-time"
import styled, { css } from "styled-components"
import { jump } from "@style-guide/keyframes"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import { pxToRem } from "@style-guide"

export const Component = styled.div.attrs({
    className: "version-image"
})`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: fit-content;

    &:has(label:hover),
    &:has(button:hover) {
        label, img, div {
            opacity: 1;
        }
    }

    .styled-button {
        min-width: ${pxToRem(64)};
        min-height: ${pxToRem(160)};
    }
`

export const Title = styled.label`
    ${text.xl}
    width: fit-content;
    min-height: ${pxToRem(28)};
    cursor: pointer;
    transition: ${transitionTime.fast} linear;
    opacity: 0.7;
    padding-bottom: ${pxToRem(10)};
`

export const Image = styled.img<{$isLoaded?: boolean}>`
${({ $isLoaded }) => css`
    width: fit-content;
    height: ${pxToRem(160)};
    filter: contrast(0.85);
    border-radius: ${pxToRem(4)};
    image-rendering: pixelated;
    transition: ${transitionTime.fast} linear;
    opacity: ${$isLoaded ? "0.7" : "0 !important"};
`}`

export const ImageLoader = styled.div.attrs({
    className: "image-loader-version-image"
})`
    height: ${pxToRem(120)};
    width: ${pxToRem(120)};
    pointer-events: none;
    top: ${pxToRem(72)};

    border: ${pxToRem(2)} ${color.whiteAlpha94} dashed;
    opacity: 0.2;

    transition: ${transitionTime.fast} linear;
    position: absolute;
    border-radius: ${pxToRem(18)};
    animation: ${jump} 700ms linear infinite;
`
