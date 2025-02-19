import { pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(24)};
`

export const Description = styled.p`
    display: flex;
    flex-direction: column;
    ${styleGuide.text.lg}
    line-height: ${pxToRem(24)};
`

export const Proportions = styled.span`
    display: flex;
    width: 100%;
    gap: ${pxToRem(24)};
    flex-wrap: wrap;
`
