import styled, { css, keyframes } from "styled-components"

const showBackground = keyframes`
    to {
        opacity: 1;
        filter: blur(0);
    }
`

export const Component = styled.img
<{ $isLoaded?: boolean }>`${({ $isLoaded }) => css`

    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    pointer-events: none;

    opacity: 0;
    filter: blur(10px);

    ${$isLoaded && css`
        animation: ${showBackground} 300ms linear forwards;
    `}
`}`
