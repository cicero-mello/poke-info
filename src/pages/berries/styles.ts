import { numbPxToRem, styleGuide } from "@style-guide"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import styled from "styled-components"

export const Screen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: calc(100svh - ${styleGuide.dimensions.headerHeight});
    height: 100%;
    max-width: ${styleGuide.dimensions.headerContainerWidth};
    width: 100%;
    padding: ${numbPxToRem(52)};
    align-self: center;

    color: #f2f2f2;
    color: ${color.pearlGray};
    color: white;
`

export const BerryWindow = styled.main`
    display: flex;
    flex-direction: column;
    aspect-ratio: 1248 / 737;
    height: 100%;
    width: 100%;
    max-width: ${numbPxToRem(1162)};
    max-height: ${numbPxToRem(812)};
    background-color: ${color.ebonyAlpha90};

    outline: 4px solid ${color.ashGrayAlpha75};
    border-radius: ${numbPxToRem(20)};
    overflow: hidden;
`

export const TopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${color.berry};
    padding: 38px 48px;
    gap: 18px;
    height: fit-content;
`

export const Title = styled.h1`
`

export const Description = styled.p`
    ${text.xl}
`

export const BerryData = styled.div`
    display: flex;
    height: calc(100% - 90px);
`

export const BottomWrapper = styled.div`
    display: flex;
    height: 90px;
    width: 100%;
    background-color: ${color.berry};
`
