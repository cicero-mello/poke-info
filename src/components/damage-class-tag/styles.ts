import { numbPxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "damage-class-tag"
})`
    ${styleGuide.text.xs}

    display: flex;
    height: fit-content;
    padding: ${numbPxToRem(3)} ${numbPxToRem(10)};
    align-items: center;
    font-weight: bold;
    border-radius: 10rem;
    border: ${numbPxToRem(2)} solid ${styleGuide.color.whiteAlpha49};
    color: ${styleGuide.color.pearlGray};
`
