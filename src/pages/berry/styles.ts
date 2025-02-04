import { transitionTime } from "@style-guide/transition-time"
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
    min-height: ${numbPxToRem(315)};
    padding: ${numbPxToRem(38)} ${numbPxToRem(48)} ${numbPxToRem(13)} ${numbPxToRem(48)};
    margin-bottom: ${numbPxToRem(60)};
`

export const TitleWrapper = styled.header`
    display: flex;
    width: 100%;
    min-height: ${numbPxToRem(28)};
    padding-bottom: ${numbPxToRem(36)};
    flex-wrap: wrap;
    gap: ${numbPxToRem(12)};
    ${text.xl}

    .styled-anchor {
        top: 0px;
        height: fit-content;
        width: fit-content;

        &:hover {
            .arrow-return-ico > path {
                fill: white;
            }
        }
    }

    .arrow-return-ico {
        height: ${numbPxToRem(13)};
        width: fit-content;
        path {
            transition: ${transitionTime.fast} linear;
            fill: ${color.platinum};
        }
    }
`
