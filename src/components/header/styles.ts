import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"
import { HeaderTheme } from "./types"

export const Component = styled.header<{ $theme: HeaderTheme }>`${
({ $theme }) => css`
    display: flex;
    z-index: 2;
    justify-content: center;
    transition-property: background-color, transform;
    transition-duration:
        ${styleGuide.transitionTime.slow},
        ${styleGuide.transitionTime.verySlow}
    ;

    ${$theme === "dark" && css`
        background-color: ${styleGuide.color.charcoal};
    `}

    ${$theme === "white" && css`
        background-color: ${styleGuide.color.whiteAlpha94};
    `}

    ${$theme === "hidden" && css`
        transform: translateY(-4rem);
        pointer-events: none;
    `}
`}`

export const Logo = styled.img`
    height: ${pxToRem("44px")};
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: ${styleGuide.dimensions.headerContainerWidth};
    width: 100%;
    height: ${styleGuide.dimensions.headerHeight};
    padding: 0px ${styleGuide.dimensions.desktopHeaderPaddingX};
    align-items: center;

    @media (max-width: ${styleGuide.dimensions.mobileWidth}){
        padding: 0px ${styleGuide.dimensions.mobileHeaderPaddingX};
    }
`
