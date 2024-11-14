import { keyframes } from "styled-components"

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

export const slideFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(400px);
    }
    to {
        opacity: 1;
        transform: rotate(0) translateX(0);
    }
`
