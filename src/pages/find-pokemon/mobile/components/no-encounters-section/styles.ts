import { pageAnimationClasses } from "../../animations"
import { numbPxToRem } from "@style-guide"
import { text } from "@style-guide/text"
import styled from "styled-components"

export const Component = styled.section`
    position: relative;
    max-width: ${numbPxToRem(680)};
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
    line-height: ${numbPxToRem(22)};
    font-weight: bold;
`
