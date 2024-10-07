import styled, { css, keyframes } from "styled-components"
import { TransitionState } from "./types"

export const FADE_TIME = 300

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`

const fadeOut = keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
`

export const TransitionWrapper = styled.div.attrs({
    class: "transition-wrapper"
})<{ $state: TransitionState }>`${({ $state }) => css`

    ${$state === "fadeIn" && css`
        animation: ${fadeIn} ${FADE_TIME}ms forwards;
    `}

    ${$state === "fadeOut" && css`
        animation: ${fadeOut} ${FADE_TIME}ms forwards;
    `}
`}`
