import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"

export const Component = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    ${styleGuide.text.base}
    color: ${styleGuide.color.pearlGray};

    gap: ${pxToRem("24px")};
`

export const Description = styled.p`
    display: flex;
`

export const Proportions = styled.span`
    display: flex;
    width: 100%;
    gap: ${pxToRem("24px")};
    flex-wrap: wrap;
`

export const LineInfo = styled.span<{ $title: string }>`
${({ $title }) => css`
    display: flex;
    flex-wrap: wrap;

    &::before {
        content: "${$title}: ";
        font-weight: bold;
        margin-right: 0.5ch;
    }

    button {
        text-decoration: underline;
        text-decoration-color: ${styleGuide.color.pearlGray};
    }
`}`
