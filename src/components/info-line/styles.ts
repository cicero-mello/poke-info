import { pxToRem, styleGuide } from "@style-guide"
import styled, { css } from "styled-components"

const componentCss = css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${pxToRem(4)} ${pxToRem(8)};
    ${styleGuide.text.base}
`

export const Component = styled.div.attrs({
    className: "info-line"
})`
    ${componentCss}
`

export const LiComponent = styled.li.attrs({
    className: "info-line"
})`
    ${componentCss}
`

export const Title = styled.span.attrs({
    className: "info-line-title"
})`
    font-weight: bold;
`

export const Info = styled.span.attrs({
     className: "info-line-data"
})`
    display: flex;
    flex-wrap: wrap;
    gap: ${pxToRem(16)} ${pxToRem(8)};
`
