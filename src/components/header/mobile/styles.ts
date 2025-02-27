import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"
import { HeaderTheme } from "../types"

export const Component = styled.div`
    display: flex;
    position: relative;
    height: 100%;
`

export const MenuButton = styled.button
<{ $isMenuOpen: boolean }>`
${({ $isMenuOpen }) => css`
    display: flex;
    position: relative;
    align-self: center;
    width: ${pxToRem(32)};
    height: ${pxToRem(24)};
    margin-bottom: ${pxToRem(3)};

    & > .menu-line {
        transition: ${styleGuide.transitionTime.medium} linear;
        width: ${pxToRem(32)};
        &:nth-child(1){ top: 0%; }
        &:nth-child(2){ top: 50%; right: 0%; }
        &:nth-child(3){ top: 100%; right: 0%; }
    }

    ${$isMenuOpen && css`
        & > .menu-line:nth-child(1){
            transform: rotate(-45deg);
            width: ${pxToRem(20)};
            top: 50%;
        }

        & > .menu-line:nth-child(2){
            transform: rotate(45deg);
            width: ${pxToRem(20)};
            top: 50%;
            opacity: 0;
            right: -2%;
        }

        & > .menu-line:nth-child(3){
            transform: rotate(45deg);
            width: ${pxToRem(20)};
            top: 50%;
            right: -2%;
        }
    `}
`}`

export const MenuLine = styled.span.attrs({
    className: "menu-line"
})<{ $theme: HeaderTheme }>`
${({ $theme }) => css`
    position: absolute;
    height: ${pxToRem(3)};
    border-radius: ${pxToRem(6)};

    ${$theme === "dark" && css`
        background-color: ${styleGuide.color.slateBlue};
    `}

    ${$theme === "white" && css`
        background-color: ${styleGuide.color.azureBlue};
    `}
`}`

export const Nav = styled.nav
<{ $theme: HeaderTheme, $isMenuOpen: boolean }>`
${({ $theme, $isMenuOpen }) => css`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: flex-end;
    overflow: hidden;

    top: 100%;
    width: ${pxToRem(168)};
    height: ${pxToRem(180)};
    right: -${styleGuide.dimensions.desktopHeaderPaddingX};
    border-radius: 0 0 0 100%;
    gap: ${pxToRem(8)};
    padding:
        ${pxToRem(14)}
        ${pxToRem(12)}
        ${pxToRem(28)}
        ${pxToRem(24)}
    ;

    transition-property: background-color, height, padding;
    transition-timing-function: linear, ease-in-out;
    transition-duration:
        ${styleGuide.transitionTime.medium},
        ${styleGuide.transitionTime.slow}
    ;

    ${$theme === "dark" && css`
        background-color: ${styleGuide.color.slateBlue};
    `}

    ${$theme === "white" && css`
        background-color: ${styleGuide.color.periwinkle};
    `}

    & > * {
        white-space: nowrap;
        filter: blur(0);
        opacity: 1;
        transition-property: opacity, filter;
        transition-duration: ${styleGuide.transitionTime.slow};
    }

    ${!$isMenuOpen && css`
        height: 0px;
        padding: 0px;
        pointer-events: none;

        & > * {
            filter: blur(0.16rem);
            opacity: 0;
        }
    `}

    @media (max-width: ${styleGuide.dimensions.mobileWidth}){
        right: -${styleGuide.dimensions.mobileHeaderPaddingX};
    }
`}`
