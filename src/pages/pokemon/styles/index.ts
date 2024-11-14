import { numbPxToRem, pxToRem, styleGuide } from "@style-guide"
import { fanRotate, slideFromLeft } from "./animations"
import { pokeWindowRem } from "@components"
import styled from "styled-components"

export const Screen = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    padding: 48px;

    max-height: calc(100svh - ${styleGuide.dimensions.headerHeight});
    height: 100%;
    width: 100%;

    @media(max-height: ${pokeWindowRem.noWhiteLine.maxHeight}){
        padding: 12px 48px;
    }

    @media
        (max-width: ${pokeWindowRem.full.maxWidth}),
        (max-height: ${pokeWindowRem.full.maxHeight})
    {
        padding: 0;
    }
`

export const RightSide = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    min-width: ${pxToRem("420px")};

    .pokemon-name-and-stats {
        padding-top: ${numbPxToRem(88)};
    }

    .stats-container {
        max-width: ${numbPxToRem(270)};
        padding: ${numbPxToRem(0)} ${numbPxToRem(44)} ${numbPxToRem(2)} ${numbPxToRem(44)};
        margin: ${numbPxToRem(20)} 0 ${numbPxToRem(48)} 0;
    }

    animation:
        ${fanRotate}
        ${styleGuide.transitionTime.moreSlow}
        ease-in-out forwards
    ;
`

export const Fan = styled.div`
    width: ${numbPxToRem(470)};
    height:  ${numbPxToRem(470)};
    position: absolute;

    border-radius: ${numbPxToRem(10)} 100% ${numbPxToRem(27)} ${numbPxToRem(45)};
    transform: rotate(45deg);
    background-color: ${styleGuide.color.ironGray};
    top: ${numbPxToRem(30)};
    left: ${numbPxToRem(5)};
`

export const LeftSide = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 24px 24px 24px 0;

    animation:
        ${slideFromLeft}
        ${styleGuide.transitionTime.moreSlow}
        ease-in-out forwards
    ;
`
