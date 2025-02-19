import { pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Content = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;

    padding: 0px 48px;
    padding-bottom: ${styleGuide.dimensions.headerHeight};

    height: 100%;
    width: 100%;
    max-width: calc(
        ${styleGuide.dimensions.mainScreenWidth}
        + 48px + 48px
    );

    @media(max-width: ${pxToRem(1120)}){
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
`

export const Logo = styled.img`
    display: flex;
    max-width: ${pxToRem(624)};
    padding-bottom: 200px;
    width: 100%;

    @media(max-width: ${pxToRem(1120)}){
        align-items: center;
        padding-bottom: 0px;
    }

    @media(max-height: ${pxToRem(550)}){
        padding-bottom: 0px;
    }
`

export const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-self: flex-end;
    gap: ${pxToRem(24)};
    perspective: 900px;
    padding-top: 200px;

    & > .styled-anchor {
        white-space: nowrap;

        @media(max-width: ${styleGuide.dimensions.mobileWidth}){
            white-space: normal;
        }
    }

    @media(max-width: ${pxToRem(1120)}){
        align-items: center;
        padding-top: 0px;
    }

    @media(max-width: ${styleGuide.dimensions.mobileWidth}){
        gap: ${pxToRem(16)};
    }

    @media(max-height: ${pxToRem(550)}){
        padding-top: 0px;
    }
`
