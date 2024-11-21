import { pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem("24px")};
`

export const Description = styled.p`
    display: flex;
    flex-direction: column;
    ${styleGuide.text.lg}
    line-height: ${pxToRem("24px")};
`

export const Proportions = styled.span`
    display: flex;
    width: 100%;
    gap: ${pxToRem("24px")};
    flex-wrap: wrap;
`
