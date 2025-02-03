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
    color: white;
`

export const BerryWindow = styled.main`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    max-width: ${numbPxToRem(1162)};
    max-height: ${numbPxToRem(812)};
    background-color: ${color.ebonyAlpha90};

    outline: ${numbPxToRem(4)} solid ${color.ashGrayAlpha75};
    border-radius: ${numbPxToRem(20)};
    overflow: hidden;
`

export const BerryData = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-bottom: ${numbPxToRem(60)};
    padding: ${numbPxToRem(38)} ${numbPxToRem(48)};
    margin-bottom: ${numbPxToRem(35)};
`

export const TitleWrapper = styled.header`
    display: flex;
    width: 100%;
    padding-bottom: ${numbPxToRem(36)};
    flex-wrap: wrap;
    gap: ${numbPxToRem(12)};
    ${text.xl}

    .styled-anchor {
        top: 0px;
    }
`
