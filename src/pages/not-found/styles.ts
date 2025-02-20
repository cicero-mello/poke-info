import { dimensions } from "@style-guide/dimensions"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import { pxToRem } from "@style-guide"
import styled from "styled-components"

export const Screen = styled.div`
    display: flex;
    width: 100%;
    height: calc(100svh - ${dimensions.headerHeight});
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const Card = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${color.onyxAlpha83};
    padding: ${pxToRem(24)};
    margin-bottom: ${pxToRem(24)};
    gap: ${pxToRem(12)};
`

export const Title = styled.h1`
    color: white;
    ${text.lg}
`

export const WarningText = styled.p`
    display: flex;
    color: white;
    ${text["2xl"]}
    font-weight: bold;

    a {
        margin-left: ${pxToRem(11)};
        text-decoration: underline;
        text-underline-offset: ${pxToRem(4)};
        color: ${color.pastelBlue}
    }
`

export const ObservationText = styled.p`
    color: white;
`

export const Time = styled.p`
    ${text["4xl"]}
    color: white;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    color: white;
`

export const Audio = styled.audio`
    display: none;
`

export const PreloadGhost = styled.img`
    display: none;
`
