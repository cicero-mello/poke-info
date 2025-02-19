import { pageAnimationClasses } from "../../animations"
import { text } from "@style-guide/text"
import { pxToRem } from "@style-guide"
import styled from "styled-components"

export const Component = styled.section`
    position: relative;
    max-width: ${pxToRem(680)};
    width: 100%;
    height: 100%;

    opacity: 0;
    ${pageAnimationClasses}
`

export const Item = styled.span`
    position: absolute;
    text-align: center;
    white-space: nowrap;
    ${text.lg}
    line-height: ${pxToRem(22)};
    font-weight: bold;
`
