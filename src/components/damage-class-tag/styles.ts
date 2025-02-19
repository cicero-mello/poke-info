import { pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "damage-class-tag"
})`
    ${styleGuide.text.xs}

    display: flex;
    height: fit-content;
    padding: ${pxToRem(3)} ${pxToRem(10)};
    align-items: center;
    font-weight: bold;
    border-radius: 10rem;
    border: ${pxToRem(2)} solid ${styleGuide.color.whiteAlpha49};
    color: ${styleGuide.color.pearlGray};
`
