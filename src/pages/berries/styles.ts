import { numbPxToRem, styleGuide } from "@style-guide"
import { color } from "@style-guide/color"
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
    aspect-ratio: 1248 / 737;
    height: 100%;
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
    height: 100%;
    padding-bottom: ${numbPxToRem(60)};
`

export const Footer = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    height: ${numbPxToRem(60)};
    max-height: ${numbPxToRem(90)};
    width: 100%;
    background-color: ${color.berry};
    justify-content: flex-end;
    align-items: center;
    padding: 0 ${numbPxToRem(24)};
    gap: ${numbPxToRem(8)};

    .styled-anchor {
        &:first-child > svg{
            transform: rotate(180deg);
        }
        &:nth-child(2) {
            padding-top: ${numbPxToRem(5)};
            padding-bottom: ${numbPxToRem(5)};
            > svg {
                filter: contrast(0.95);
            }
        }
    }
`
