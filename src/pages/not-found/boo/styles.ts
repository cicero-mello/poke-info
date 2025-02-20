import styled, { keyframes } from "styled-components"
import { fadeIn } from "@style-guide/keyframes"

export const Component = styled.div`
    display: flex;
    width: 100%;
    height: 100svh;
    position: absolute;
    overflow: hidden;
    top: 0;
    z-index: 20;
`

const flying = keyframes`
    from {
        bottom: -50%;
        right: -50%;
    }
    to {
        bottom: 50%;
        right: 100%;
    }
`

export const Ghost = styled.img `
    position: absolute;
    height: 50%;
    bottom: -50%;
    right: -50%;
    animation: ${flying} 600ms linear forwards;
    image-rendering: pixelated;
`

export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    animation: ${fadeIn} 300ms steps(2);
`

export const Noise = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background: repeating-linear-gradient(#111, #111 50%, white 50%, white);
    background-size: 5px 5px;
    filter: url(#noise);
`
