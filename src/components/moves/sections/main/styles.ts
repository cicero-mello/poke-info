import { numbPxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Component = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${numbPxToRem(12)};
    color: ${styleGuide.color.pearlGray};
`

export const InfoBubble = styled.p`
    align-self: center;

    ${styleGuide.text.base}
    text-align: center;

    margin-top: ${numbPxToRem(38)};
    max-width: ${numbPxToRem(650)};
    background-color: ${styleGuide.color.whiteAlpha14};
    border-radius: ${numbPxToRem(12)};
    padding: ${numbPxToRem(12)} ${numbPxToRem(24)};
`

export const Title = styled.h3``

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: ${numbPxToRem(18)};
    padding: 0;
    list-style: none;
`

export const ListItem = styled.li`
    max-height: fit-content;
`
