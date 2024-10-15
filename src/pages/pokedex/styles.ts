import { styleGuide } from "@style-guide"
import styled from "styled-components"

export const Screen = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    padding: 48px;

    max-height: calc(100svh - ${styleGuide.dimensions.headerHeight});
    height: 100%;
    width: 100%;
`

export const Window = styled.main`
    display: flex;
    flex-direction: column;
    border-radius: 40px;
    overflow: hidden;
    color: white;
    padding: 98px 6% 0 6%;
    aspect-ratio: 1248 / 860;

    background: linear-gradient(
        to bottom,
        ${styleGuide.color.pearlGray} 60px,
        ${styleGuide.color.onyxAlpha83} 60px
    );

    pre {
        overflow: scroll;
        height: 50%;
    }
`
