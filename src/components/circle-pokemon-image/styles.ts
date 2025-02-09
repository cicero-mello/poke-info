import { transitionTime } from "@style-guide/transition-time"
import { numbPxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"
import { text } from "@style-guide/text"
import { PokeApi } from "@types"

export const Component = styled.div.attrs({
    className: "circle-pokemon-image"
})`
    display: flex;
    flex-direction: column;
    gap: ${numbPxToRem(16)};
`

export const Name = styled.span`
    ${text.xl}
    width: 100%;
    font-weight: bold;
    text-align: center;
`

export const ImageWrapper = styled.div`
    display: flex;
    position: relative;
`

export const Image = styled.img`
    position: relative;
    height: ${numbPxToRem(200)};
    width: ${numbPxToRem(200)};
`

export const BackgroundCircle = styled.div
<{$type?: PokeApi.PokemonType}>`
${({ $type }) => css`
    min-width: 100%;
    max-width: ${numbPxToRem(200)};
    min-height: 100%;
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    transition: ${transitionTime.medium} ease-in-out;
    ${!$type ? css`background-color: transparent;` : css`
        background-color: ${styleGuide.getCardColors($type).background};
        opacity: 0.72;
    `}
`}`
