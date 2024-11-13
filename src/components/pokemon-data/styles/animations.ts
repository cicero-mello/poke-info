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

export const descendHeader = keyframes`
    from {
        height: calc(100% + 16rem);
        transform: translateY(-16rem);
    }
    to {
        height: 100%;
        transform: translateY(0);
    }
`

export const revealContent = keyframes`
    from {
        background-color: transparent;
    }
`
