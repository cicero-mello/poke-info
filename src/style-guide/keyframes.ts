import { keyframes } from "styled-components"

export const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
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
