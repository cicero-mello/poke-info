import { transitionTime } from "@style-guide/transition-time"
import styled, { css } from "styled-components"
import { jump } from "@style-guide/keyframes"
import { numbPxToRem } from "@style-guide"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"

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
        min-width: ${numbPxToRem(64)};
        min-height: ${numbPxToRem(160)};
    }
`

export const Title = styled.label`
    ${text.xl}
    width: fit-content;
    min-height: ${numbPxToRem(28)};
    cursor: pointer;
    transition: ${transitionTime.fast} linear;
    opacity: 0.7;
    padding-bottom: ${numbPxToRem(10)};
`

export const Image = styled.img<{$isLoaded?: boolean}>`
${({ $isLoaded }) => css`
    width: fit-content;
    height: ${numbPxToRem(160)};
    filter: contrast(0.85);
    border-radius: ${numbPxToRem(4)};
    image-rendering: pixelated;
    transition: ${transitionTime.fast} linear;
    opacity: ${$isLoaded ? "0.7" : "0 !important"};
`}`

export const ImageLoader = styled.div`
    height: ${numbPxToRem(120)};
    width: ${numbPxToRem(120)};
    pointer-events: none;
    top: ${numbPxToRem(72)};

    border: ${numbPxToRem(2)} ${color.whiteAlpha94} dashed;
    opacity: 0.2;

    transition: ${transitionTime.fast} linear;
    position: absolute;
    border-radius: ${numbPxToRem(18)};
    animation: ${jump} 700ms linear infinite;
`
