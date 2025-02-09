import { keyframes } from "styled-components"

export const fadeIn = keyframes`
    from {
        opacity: 0;
        pointer-events: none;
    }
    to {
        opacity: 1;
        pointer-events: all;
    }
`

export const fadeOut = keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
`

export const blurFadeOut = keyframes`
    from {
        opacity: 1;
        filter: blur(0px);
    }
    to {
        opacity: 0;
        filter: blur(10px);
    }
`

export const opacityLoading = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
`

export const opacityLoading2 = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
`

export const popUp = keyframes`
    0% {
        opacity: 0;
        scale:(0.8);
    }
    65.5% {
        transform: scale(1.05);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`

export const rotate = keyframes`
    to {
        transform: rotate(1turn);
    }
`

export const slideFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(400px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

export const slideFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-400px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

export const slideFromBottom = keyframes`
    from {
        opacity: 0;
        transform: translateY(400px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

export const getSlideFromBottom = (pxOrRem: string) => keyframes`
    from {
        opacity: 0;
        transform: translateY(${pxOrRem});
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

export const fanRotate = keyframes`
    from {
        opacity: 0;
        transform-origin: 0% 50%;
        transform: rotate(80deg);
    }
    to {
        opacity: 1;
        transform-origin: 0% 50%;
        transform: rotate(0) translateY(0);
    }
`

export const crashZoom = keyframes`
    from {
        opacity: 0;
        transform: scale(0);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`

export const spinZoom = keyframes`
    from {
        transform: scale(0) rotate(140deg);
        opacity: 0;
    }
    to {
        transform: scale(1) rotate(0deg);
        opacity: 1;
    }
`
