import styled, { css } from "styled-components"
import { styleGuide } from "@style-guide"

export const Component = styled.div.attrs({
    className: "pokemon-image"
})<{ $isImageLoaded: boolean }>`
${({ $isImageLoaded }) => css`
    display: flex;
    width: fit-content;
    height: 100%;

    .pikachu-shadow-svg{
        position: absolute;
        height: 100%;
        pointer-events: none;
        width: fit-content;
        pointer-events: none;

        animation:
            ${styleGuide.keyframes.fadeIn} 340ms
            ease-in forwards
        ;

        > path {
            fill: ${styleGuide.color.stoneGray};
            animation:
                ${styleGuide.keyframes.opacityLoading}
                1.3s ease-in-out infinite
            ;
        }
    }

    img {
        display: flex;
        position: absolute;
        height: 100%;
        opacity: 0;
        z-index: 2;

        ${$isImageLoaded && css`
            position: relative;
            opacity: 1;
        `}
    }
`}`

export const RelativeWrapper = styled.div`
    display: flex;
    position: relative;
`
