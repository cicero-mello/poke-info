import { numbPxToRem } from "@style-guide"
import { color } from "@style-guide/color"
import { text } from "@style-guide/text"
import styled from "styled-components"

export const Screen = styled.main`
    display: flex;
    flex-direction: column;
    background: ${color.onyxAlpha83};
    width: 100%;
    height: 100%;
    padding: 36px 24px;
    color: ${color.pearlGray};
    align-items: center;
    gap: ${numbPxToRem(24)};
`

export const PageName = styled.h1`
    ${text["2xl"]}
    align-self: flex-start;
`
