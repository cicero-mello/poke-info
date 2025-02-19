import { pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${pxToRem(12)};
    color: ${styleGuide.color.pearlGray};
`

export const InfoBubble = styled.p`
    align-self: center;

    ${styleGuide.text.base}
    text-align: center;

    margin-top: ${pxToRem(38)};
    max-width: ${pxToRem(650)};
    background-color: ${styleGuide.color.whiteAlpha14};
    border-radius: ${pxToRem(12)};
    padding: ${pxToRem(12)} ${pxToRem(24)};
`

export const Title = styled.h3``

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: ${pxToRem(18)};
    padding: ${pxToRem(8)};
    list-style: none;
`

export const ListItem = styled.li`
    max-height: fit-content;
`
