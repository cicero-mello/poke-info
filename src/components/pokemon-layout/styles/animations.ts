import { keyframes } from "styled-components"

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
