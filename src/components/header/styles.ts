import styled, { css } from "styled-components"
import { HeaderTheme } from "./types"
import { pxToRem, styleGuide } from "@style-guide"

export const Component = styled.header<{ $theme: HeaderTheme }>`${
({ $theme }) => css`
    display: flex;
    z-index: 1;
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
    `}
`}`

export const Logo = styled.img`
    height: ${pxToRem("44px")};
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: ${styleGuide.dimensions.headerWidth};
    width: 100%;
    min-height: ${pxToRem("64px")};
    padding: 0px ${styleGuide.dimensions.headerPaddingX};
    align-items: center;
`
