import styled, { css, keyframes } from "styled-components"

export const Layout = styled.div.attrs({
    class: "layout"
})`
    display: flex;
    flex-direction: column;

    width: 100svw;
    height: 100svh;
`

export const LayoutWrapper = styled.div.attrs({
    class: "layout-wrapper"
})`
    display: flex;
    flex-direction: column;
    align-self: center;

    max-width: 1920px;
    width: calc(100% - (24px * 2));
    height: 100%;
`

const showBackground = keyframes`
    to {
        opacity: 1;
        filter: blur(0);
    }
`

export const BackgroundImage = styled.img
<{ $isLoaded?: boolean }>`${({ $isLoaded }) => css`

    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;

    opacity: 0;
    filter: blur(10px);

    ${$isLoaded && css`
        animation: ${showBackground} 300ms linear forwards;
    `}
`}`
