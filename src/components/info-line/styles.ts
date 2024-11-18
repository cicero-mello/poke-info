import { pxToRem, styleGuide } from "@style-guide"
import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "info-line"
})`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${pxToRem("4px")} ${pxToRem("8px")};
    ${styleGuide.text.base}
`

export const Title = styled.span`
    font-weight: bold;
`

export const Info = styled.span`
    display: flex;
    flex-wrap: wrap;
    gap: ${pxToRem("16px")} ${pxToRem("8px")};
`
