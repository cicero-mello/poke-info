import styled, { css } from "styled-components"
import { HeaderTheme } from "./types"
import { pxToRem, styleGuide } from "@style-guide"

export const Component = styled.header<{ $theme: HeaderTheme }>`${
({ $theme }) => css`
    display: flex;
    justify-content: center;
    transition-property: background-color, transform;
    transition-duration: 200ms, 500ms;

    ${$theme === "dark" && css`
        background-color: ${styleGuide.color.charcoal};
    `}

    ${$theme === "white" && css`
        background-color: ${styleGuide.color.whiteAlpha94};
    `}

    ${$theme === "hidden" && css`
        transform: translateY(-4rem);
    `}
`}`

export const Logo = styled.img`
    height: ${pxToRem("44px")};
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: ${styleGuide.containerDimensions.headerWidth};
    width: 100%;
    min-height: ${pxToRem("64px")};
    padding: 0px 48px;
    align-items: center;
`
